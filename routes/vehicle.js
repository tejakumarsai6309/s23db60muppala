var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();
var passport = require('passport');
/* GET vehicles */
router.get('/', vehicle_controlers.vehicle_view_all_Page );

/* GET detail vehicle page */
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);

/* GET create vehicle page */
router.get('/create', vehicle_controlers.vehicle_create_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET update costume page */
router.get('/update', secured,vehicle_controlers.vehicle_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });

/* GET create update page */
//router.get('/update', vehicle_controlers.vehicle_update_Page);

/* GET delete vehicle page */
router.get('/delete', vehicle_controlers.vehicle_delete_Page);


module.exports = router;
