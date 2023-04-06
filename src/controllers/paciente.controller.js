import pacienteService from "../service/paciente.service.js";

async function createPaciente(req, res, next) {
  try {
    let paciente = req.body;
    if (!paciente.nome || !paciente.dataNascimento || !paciente.telefone || !paciente.email) {
      throw new Error(`Campo obrigatorio`);
    }
    paciente = await pacienteService.createPaciente(paciente);
    res.send(paciente);
    logger.info(`POST /paciente - ${JSON.stringify(paciente)}`);
  } catch (error) {
    next(error);
  }
}

async function getPacientes(req, res, next) {
  try {
    res.send(await pacienteService.getPacientes());
    logger.info("GET /pacientes");
  } catch (error) {
    next(error);
  }
}

async function getPaciente(req, res, next) {
  try {
    res.send(await pacienteService.getPaciente(req.params.id));
    logger.info("GET /paciente");
  } catch (error) {
    next(error);
  }
}

async function deletePaciente(req, res, next) {
  try {
    await pacienteService.deletePaciente(req.params.id);
    res.end();
    logger.info(`DELETE /paciente ${JSON.stringify(paciente)}`);
  } catch (error) {
    next(error);
  }
}

async function updatePaciente(req, res, next) {
  try {
    let paciente = req.body;
    if (!paciente.id || !paciente.nome) {
      throw new Error("ID e Nome são obrigatorios");
    }
    paciente = await pacienteService.updatePaciente(paciente);
    res.send(paciente);
    logger.info(`PUT /paciente - ${JSON.stringify(paciente)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createPaciente,
  getPacientes,
  getPaciente,
  deletePaciente,
  updatePaciente,
};
