import Especialidade from "../models/especialidade.model.js";

async function getEspecialidades() {
  try {
    return await Especialidade.findAll();
  } catch (error) {
    throw error;
  }
}
export default {
  getEspecialidades,
};
