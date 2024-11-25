const express = require("express")

const router = express.Router()

const {CityController} = require('../../controllers/index') 

router.get('/', CityController.getCities)

router.get("/:id", CityController.getCity)

router.post("/", CityController.createCity)

router.put("/:id", CityController.updateCity)   

router.delete("/:id", CityController.deleteCity)


module.exports = router
