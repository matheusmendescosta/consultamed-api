import historicoConsultasRepository from "../repositories/historicoConsultas.repository.js";
import consultaRepository from "../repositories/consulta.repository.js";

async function createHistoricoConsultas(historico) {
    if(!await consultaRepository.getConsulta(historico.consultaId)){
        throw new Error ("consulta id  não encontrado")  
    }
    return await historicoConsultasRepository.insertHistoricoConsultas(historico)
}

async function getHistoricoConsultas(consultaId) {
    if(consultaId) {
        return await historicoConsultasRepository.getHistoricoConsultasByConsulta(consultaId)
    }
    return await historicoConsultasRepository.getHistoricoConsultas()
}

async function getHistoricoConsulta(id) {
   return await historicoConsultasRepository.getHistoricoConsulta(id)
}

async function deleteHistoricoConsulta(id) {
    return await historicoConsultasRepository.deleteHistoricoConsulta(id)
}

async function updateHistoricoConsulta(historico){
    let erro = ""
    if(!await consultaRepository.getConsulta(historico.id)){
        erro ("Campo consulta id não encontrado ou informado")
    }
    if (erro) {
        throw new Error (erro)
    }
    return await historicoConsultasRepository.updateHistoricoConsulta(historico)
}


export default {
    createHistoricoConsultas,
    getHistoricoConsultas,
    getHistoricoConsulta,
    deleteHistoricoConsulta,
    updateHistoricoConsulta
}