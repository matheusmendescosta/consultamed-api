import Especialidade from "../models/especialidade.model.js";
import Medico from "../models/medico.model.js";

async function insertMedico(medico) {
  try {
    return await Medico.create(medico);
  } catch (error) {
    throw error;
  }
}

async function getMedicos() {
  try {
    return await Medico.findAll({
      include: [
        {
          model: Especialidade,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getMedico(id) {
  try {
    return await Medico.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteMedico(id) {
  try {
    await Medico.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateMedico(medico) {
  try {
    await Medico.update(medico, {
      where: {
        id: medico.id,
      },
    });
    return await getMedico(medico.id);
  } catch (error) {
    throw error;
  }
}

export default {
  insertMedico,
  getMedicos,
  getMedico,
  deleteMedico,
  updateMedico,
};
