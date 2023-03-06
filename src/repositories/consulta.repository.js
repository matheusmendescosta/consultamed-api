import Consulta from "../models/consulta.model.js";
import Paciente from "../models/paciente.model.js";
import Medico from "../models/medico.model.js";

async function insertConsulta(consulta){
    try {
        return await Consulta.create(consulta)
    } catch (error) {
        throw  error
    }
}

async function getConsultas() {
    try {
        return await Consulta.findAll({
            include: [
                {
                    model: Paciente
                },
                {
                    model: Medico
                }
            ]
        })
    } catch (error) {
        
    }
}

async function getConsultaByPacienteId(pacienteId){
    try {
        return await Consulta.findAll({
            where: {
                pacienteId
            },
            include: [{
                model: Paciente
            }]
        })
    } catch (error) {
        throw error
    }
}

async function getConsultasByMedicoId(medicoId) {
    try {
        return await Consulta.findAll({
            where: {
                medicoId
            },
            include: [{
                model: Medico
            }]
        })
    } catch (error) {
        throw error
    }
}

async function getConsulta(id) {
    try {
        return await Consulta.findByPk(id)
    } catch (error) {
        throw error
    }
}

async function deleteConsulta(id) {
    try {
        await Consulta.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updateConsulta(consulta) {
    try {
        await Consulta.update({
            dataHora: consulta.dataHora,
            medicoId: consulta.medicoId
        }, {
            where: {
                id: consulta.id
            }
        })
        return await getConsulta(consulta.id)
    } catch (error) {
        throw error
    }
}

export default {
    insertConsulta,
    getConsultas,
    getConsultaByPacienteId,
    getConsultasByMedicoId,
    getConsulta,
    deleteConsulta,
    updateConsulta
}