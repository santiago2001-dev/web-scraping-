const {Router} = require('express');
const router = Router();

const {requestHttp,searchWerb} =  require('../controllers/controllerScraping');
//router.get('',requestHttp);
router.get('',searchWerb)

module.exports = router;