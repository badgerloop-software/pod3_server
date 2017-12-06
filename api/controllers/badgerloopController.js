'use strict';
// TODO: Modify responses to display properly according to https://badgerloop.docs.apiary.io
/**
 * API Response Model - read_all_data
 * {
 *   "sensors": [
 *     "sensor_id": { name: "...", value: "...", units: "..."},
 *     "sensor_id2": ...,
 *     ...
 *   ]
 * }
 */
exports.read_all_data = function(req, res) {
  var sql = "SELECT * FROM badgerloop WHERE time > ...";
  connection.query(sql, function (err, result) {
      if (err) {
        res.status(500).end;
      };
      res.status(200);
      res.send({ "sensors": result, "time": new Date().getTime() })
  });
};

/**
 * API Response Model - read_sensor_data
 * {
 *   "sensor_id": {
 *     name: "...",
 *     value: "...",
 *     units: "...",
 *     ...
 *   }
 * }
 */
exports.read_sensor_data = function(req, res) {
  var sql = "SELECT * FROM badgerloop WHERE time > ...";
  connection.query(sql, function (err, result) {
      if (err) {
        res.status(500).end;
      };
      res.status(200);
      res.send({ "id": result, "time": new Date().getTime() })
  });
};
