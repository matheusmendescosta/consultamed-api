import pacienteRespository from "../repositories/paciente.respository.js";


async function createPaciente(paciente) {
    return await pacienteRespository.insertPaciente(paciente)
}

async function getPacientes(){
    return await pacienteRespository.getPacientes()
}

async function getPaciente(id) {
    return await pacienteRespository.getPaciente(id)
}

async function deletePaciente(id) {
    return await pacienteRespository.deletePaciente(id)
}

async function updatePaciente(paciente) {
    return await pacienteRespository.updatePaciente(paciente)
}

export default {
    createPaciente,
    getPaciente,
    getPacientes,
    deletePaciente,
    updatePaciente
}