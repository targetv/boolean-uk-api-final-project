const express = require("express")  
const carsRouter = express.Router()

const carsController = require("./controllers")

carsRouter.post("/", carsController.createOne)
carsRouter.get("/", carsController.retrieveAll)
carsRouter.get("/:id", carsController.retrieveOne)
carsRouter.delete("/:id", carsController.deleteOne)
carsRouter.patch("/:id", carsController.updateOne)

module.exports = carsRouter


