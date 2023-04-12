import express from "express";
import cors from "cors";
import winston from "winston";
import SwaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../doc.js";
import pacienteRouter from "./routes/paciente.route.js";
import medicoRouter from "./routes/medico.route.js";
import consultaRouter from "./routes/consulta.route.js";
import historicoConsultas from "./routes/historicoConsultas.route.js";
import especialidadeRouter from "./routes/especialidade.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: "consultamed.log" })],
  format: combine(label({ label: "consultamed-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/documentacao", SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
app.use("/paciente", pacienteRouter);
app.use("/medico", medicoRouter);
app.use("/consulta", consultaRouter);
app.use("/historicoConsultas", historicoConsultas);
app.use("/especialidades", especialidadeRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3030, () => {
  console.log("API STARTED");
});
