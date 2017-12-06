'use strict';
module.exports = function(app) {
  var badgerloop = require('../controllers/badgerloopController');
  
  // Get latest sensor data
  app.route('/pod')
    .get(badgerloop.read_all_data);

  // Get latest specific sensor data
  app.route('/pod/:sensorId')
    .get(badgerloop.read_sensor_data);
};
