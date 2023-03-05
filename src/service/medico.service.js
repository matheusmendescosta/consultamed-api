import medicoRepository from "../repositories/medico.repository.js";

async function createMedico(medico) {
    return await medicoRepository.insertMedico(medico)
}

async function getMedicos() {
    return await medicoRepository.getMedicos()
}

async function getMedico(id) {
    return await medicoRepository.getMedico(id)
}

async function deleteMedico(id) {
    return await medicoRepository.deleteMedico(id)
}

async function updateMedico(medico) {
    return await medicoRepository.updateMedico(medico)
}

export default {
    createMedico,
    getMedicos,
    getMedico,
    deleteMedico,
    updateMedico
}