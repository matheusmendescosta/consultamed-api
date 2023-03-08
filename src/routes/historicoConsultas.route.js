import express from 'express'
import historicoConsultasController from '../controllers/historicoConsultas.controller.js'

const routes = express.Router()

routes.post("/", historicoConsultasController.createHistoricoConsultas)
routes.get("/", historicoConsultasController.getHistoricoConsultas)
routes.get("/:id", historicoConsultasController.getHistoricoConsulta)
routes.delete("/:id", historicoConsultasController.deleteHistoricoConsulta)
routes.put("/", historicoConsultasController.updateHistoricoConsulta)

export default routes