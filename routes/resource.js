var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicle_controller = require('../controllers/vehicle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// VEHICLE ROUTES ///
// POST request for creating a Costume.
router.post('/vehicle', vehicle_controller.vehicle_create_post);
// DELETE request to delete vehicle.
router.delete('/vehicle/:id', vehicle_controller.vehicle_delete);
// PUT request to update vehicle.
router.put('/vehicle/:id', vehicle_controller.vehicle_update_put);
// GET request for one vehicle.
router.get('/vehicle/:id', vehicle_controller.vehicle_detail);
// GET request for list of all vehicle items.
router.get('/vehicle', vehicle_controller.vehicle_list);
module.exports = router;

