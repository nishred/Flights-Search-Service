const express = require("express")  

const router = express.Router() 

const cityRouter = require('./city.routes') 

router.use('/cities', cityRouter)


module.exports = router 