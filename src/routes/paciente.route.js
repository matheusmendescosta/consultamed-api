import express  from "express";
import pacienteController from "../controllers/paciente.controller.js";

const router = express.Router();

router.post("/", pacienteController.createPaciente)
router.get("/", pacienteController.getPacientes)
router.get("/:id", pacienteController.getPaciente)
router.delete("/:id", pacienteController.deletePaciente)
router.put("/", pacienteController.updatePaciente)

export default router;