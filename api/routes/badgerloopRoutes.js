'use strict';
module.exports = function(app) {
  var badgerloop = require('../controllers/badgerloopController');

  // Badgerloop Routes
  app.route('/pod')
    .get(badgerloop.read_all_data);

  app.route('/pod/:sensorId')
    .get(badgerloop.read_a_task);
};
