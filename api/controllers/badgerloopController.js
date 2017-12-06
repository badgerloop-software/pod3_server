'use strict';

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
  console.log(req);
  if (req.query.test == 2) {
    res.end;
    res.status(404).end;
  }
  res.send({ pod: 'data' });
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
  res.send({ sensor: req.query.test });
};
