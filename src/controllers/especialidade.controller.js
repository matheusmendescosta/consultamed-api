import especialidadeService from "../service/especialidade.service.js";

async function listaEspecialidades(req, res, next) {
  try {
    res.send(await especialidadeService.getEspecialidades());
    logger.info("GET /especialidade");
  } catch (error) {
    next(error);
  }
}

export default {
  listaEspecialidades,
};
