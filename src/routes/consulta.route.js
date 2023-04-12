import express from "express";
import consultaController from "../controllers/consulta.controller.js";

const router = express.Router();

router.post("/", consultaController.createConsulta);
router.get("/", consultaController.getConsultas);
router.get("/:id", consultaController.getConsulta);
router.delete("/:id", consultaController.deleteConsulta);
router.put("/", consultaController.updateConsulta);

export default router;
