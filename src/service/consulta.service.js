import consultaRepository from "../repositories/consulta.repository.js";
import pacienteRespository from "../repositories/paciente.respository.js";
import medicoRepository from "../repositories/medico.repository.js";

async function createConsulta(consulta){
    if(await pacienteRespository.getPaciente(consulta.id)){
        throw new Error ("id paciente não encontrado")
    }
    if(await medicoRepository.getMedico(consulta.id)){
        throw new Error ("id medico não encontrado")
    }

    return await consultaRepository.insertConsulta(consulta)
}

async function getConsultas(pacienteId, medicoId) {
    if(pacienteId) {
        return await consultaRepository.getConsultaByPacienteId(pacienteId)
    }
    if(medicoId) {
        return await consultaRepository.getConsultasByMedicoId(medicoId)
    }
    return await consultaRepository.getConsultas()
}

async function getConsulta(id) {
    return consultaRepository.getConsulta(id)
}

async function deleteConsulta(id) {
    return await consultaRepository.deleteConsulta(id)
}

async function updateConsulta(consulta) {
    let erro = ""
    if(!await medicoRepository.getMedico(consulta.id)) {
        erro = "O medicoId infromado não existe"
    }
    // if(!await pacienteRespository.getPaciente(consulta.id)) {
    //     erro = "O pacienteId infromado não existe"
    // }
    if (erro) {
        throw new Error (erro)
    }
    return await consultaRepository.updateConsulta(consulta)
}

export default {
    createConsulta,
    getConsultas,
    getConsulta,
    deleteConsulta,
    updateConsulta
}