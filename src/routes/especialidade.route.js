import express from "express";
import especialidadeController from "../controllers/especialidade.controller.js";

const router = express.Router();

router.get("/", especialidadeController.listaEspecialidades);

export default router;
