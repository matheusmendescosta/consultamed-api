import express from 'express'
import medicoController from '../controllers/medico.controller.js'

const router = express.Router();

router.post("/", medicoController.createMedico)
router.get("/", medicoController.getMedicos)
router.get("/:id", medicoController.getMedico)
router.delete("/:id", medicoController.deleteMedico)
router.put("/", medicoController.updateMedico)

export default router;
