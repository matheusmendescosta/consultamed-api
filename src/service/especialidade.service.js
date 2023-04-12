import especialidadeRepository from "../repositories/especialidade.repository.js";

async function getEspecialidades() {
  return await especialidadeRepository.getEspecialidades();
}

export default {
  getEspecialidades,
};
