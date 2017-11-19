'use strict';

exports.read_all_data = function(req, res) {
  res.send({ pod: 'data' });
};

exports.read_sensor_data = function(req, res) {
  res.send({ sensor: 'data' });
};
