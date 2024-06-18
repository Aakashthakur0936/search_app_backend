const express = require('express');
const { getSearchData } = require('../controllers/controller');


const router = express.Router()

router.route('/search').post(getSearchData)

module.exports =  router;