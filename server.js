var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mysql = require('mysql'),
  bodyParser = require('body-parser');

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
var binary = require('binary');
var mysql = require('mysql');

mysql.Promise = global.Promise;
var connection = mysql.createConnection(
  {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'badgerloop'
  }
);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

    /*
     *  Binary Telemetry Frame Map
     *  ti : team_id - UInt8
     *  s  : status - UInt8
     *  a  : acceleration - Int32
     *  p  : position - Int32
     *  v  : velocity - Int32
     *  bv : battery_voltage - Int32
     *  bc : battery_current - Int32
     *  bt : battery_temp - Int32
     *  pt : pod_temp - Int32
     *  sc : stripe_count - UInt32
     */
    var vars = binary.parse(msg)
        .word8bu('ti')
        .word8bu('s')
        .word32bs('a')
        .word32bs('p')
        .word32bs('v')
        .word32bs('bv')
        .word32bs('bc')
        .word32bs('bt')
        .word32bs('pt')
        .word32bu('sc')
        .vars;
    console.dir(vars);

    var sql = "INSERT INTO badgerloop (ti, s, a, p, v, bv, bc, bt, pt, sc) VALUES ("
        + vars.ti
        + ", "
        + vars.s
        + ", "
        + vars.a
        + ", "
        + vars.p
        + ", "
        + vars.v
        + ", "
        + vars.bv
        + ", "
        + vars.bc
        + ", "
        + vars.bt
        + ", "
        + vars.pt
        + ", "
        + vars.sc
        + ");";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

server.on('listening', () => {
    const address = server.address();
console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(3000);
// server listening 0.0.0.0:3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/badgerloopRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Badgerloop RESTful API server started on: ' + port);
