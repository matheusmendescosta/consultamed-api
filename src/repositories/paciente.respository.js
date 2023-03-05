import Paciente from "../models/paciente.model.js";

async function insertPaciente(paciente) {
    try {
        return await Paciente.create(paciente)
    } catch (error) {
        throw error
    }
}

async function getPacientes() {
    try {
        return await Paciente.findAll();
    } catch (error) {
        throw error
    }
}

async function getPaciente(id) {
    try {
        return await Paciente.findByPk(id)
    } catch (error) {
        throw error
    }
}

async function deletePaciente(id) {
    try {
        await Paciente.destroy({
            where:{
                id:id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updatePaciente(paciente) {
    try {
        await Paciente.update(paciente, {
            where: {
                id: paciente.id
            }
        });
        return await getPaciente(paciente.id)
    } catch (error) {
        throw error
    }
}

export default {
    insertPaciente,
    getPaciente,
    getPacientes,
    updatePaciente,
    deletePaciente
}