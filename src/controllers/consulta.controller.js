import consultaService from "../service/consulta.service.js";

async function createConsulta(req, res, next) {
  try {
    let consulta = req.body;
    if (!consulta.data || !consulta.hora) {
      throw new Error("Data, hora, cliente, medico são obrigatorios");
    }
    consulta = await consultaService.createConsulta(consulta);
    res.send(consulta);
    logger.info(`POST /consulta ${JSON.stringify(consulta)}`);
  } catch (error) {
    next(error);
  }
}

async function getConsultas(req, res, next) {
  try {
    res.send(await consultaService.getConsultas(req.query.pacienteId, req.query.medicoId));
    logger.info("GET /consuta");
  } catch (error) {
    next(error);
  }
}

async function getConsulta(req, res, next) {
  try {
    res.send(await consultaService.getConsulta(req.params.id));
    res.end();
    logger.info("GET /consulta");
  } catch (error) {
    next(error);
  }
}

async function deleteConsulta(req, res, next) {
  try {
    await consultaService.deleteConsulta(req.params.id);
    res.end();
    logger.info("DELETE /consulta");
  } catch (error) {
    next(error);
  }
}

async function updateConsulta(res, req, next) {
  try {
    let consulta = req.body;
    if (!consulta.dataHora) {
      throw new Error("Data, pacienteId e medicoId são obrigatorios");
    }
    consulta = await consultaService.updateConsulta(consulta);
    res.send(consulta);
    logger.info(`PUT /consulta ${JSON.stringify(consulta)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createConsulta,
  getConsultas,
  getConsulta,
  deleteConsulta,
  updateConsulta,
};
