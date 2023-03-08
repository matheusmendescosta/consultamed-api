import HistoricoConsultas from "../models/historicoConsultas.model.js";
import Consulta from "../models/consulta.model.js";
import Paciente from "../models/paciente.model.js";
import Medico from "../models/medico.model.js";

async function insertHistoricoConsultas(historico) {
    try {
        return await HistoricoConsultas.create(historico)
    } catch (error) {
        throw error
    }
}

async function getHistoricoConsultas() {
    try {
        return await HistoricoConsultas.findAll({
            include: [{
                model: Consulta,
                include: [{
                    model: Medico
                },
                {
                    model: Paciente
                }],
            }
        ]})
    } catch (error) {
        throw error
    }
}

async function getHistoricoConsultasByConsulta(consultaId) {
    try {
        return await HistoricoConsultas.findAll({
            where : {
                consultaId
            },
            include: [{
                model: Consulta
            }]
        })
    } catch (error) {
        throw error
    }
}

async function getHistoricoConsulta(id) {
    try {
        return await HistoricoConsultas.findByPk(id)
    } catch (error) {
        throw error
    }
}

async function deleteHistoricoConsulta(id) {
    try {
        await HistoricoConsultas.destroy({
            where:{
                id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updateHistoricoConsulta(historico) {
    try {
        await HistoricoConsultas.update({
            dataHota: historico.dataHota,
            sintomas: historico.sintomas,
            diagnostico: historico.diagnostico,
            tratamento: historico.tratamento
        }, {
            where: {
                id: historico.id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    insertHistoricoConsultas,
    getHistoricoConsultasByConsulta,
    getHistoricoConsultas,
    getHistoricoConsulta,
    deleteHistoricoConsulta,
    updateHistoricoConsulta
}