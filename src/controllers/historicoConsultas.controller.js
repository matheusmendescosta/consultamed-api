import historicoConsultasService from "../service/historicoConsultas.service.js"

async function createHistoricoConsultas(req, res, next){
    try {
        let historicoConsultas = req.body
        if(!historicoConsultas.dataHota){
            throw new Error ("Data Hora e um campo obrigatio")
        }
        historicoConsultas = await historicoConsultasService.createHistoricoConsultas(historicoConsultas)
        res.send(historicoConsultas)
        logger.info(`POST /historicoConsultas ${JSON.stringify(historicoConsultas)}`)
    } catch (error) {
        next(error)
    }
}

async function getHistoricoConsultas(req, res, next) {
    try {
        res.send(await historicoConsultasService.getHistoricoConsultas(req.params.id))
        logger.info(`GET /historicoConsultas`)
    } catch (error) {
        next(error)
    }
}

async function getHistoricoConsulta(req, res, next) {
    try {
        res.send(await historicoConsultasService.getHistoricoConsulta(req.params.id))
        res.end()
        logger.info(`GET /historicoConsulta ${JSON.stringify(req.params.id)}`)
    } catch (error) {
        next(error)
    }
}

async function deleteHistoricoConsulta(req, res, next) {
    try {
        await historicoConsultasService.deleteHistoricoConsulta(req.params.id)
        res.end()
        logger.info(`DELETE /historicoConsulta ${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

async function updateHistoricoConsulta(req, res, next) {
    try {
        let historicoConsultas = req.body
        if(!historicoConsultas.consultaId){
            throw new Error ("consultaId é um campo obrigatorio")
        }
        historicoConsultas = await historicoConsultasService.createHistoricoConsultas(historicoConsultas)
        res.send(historicoConsultas)
        logger.info(`POST /historicoConsultas ${JSON.stringify(historicoConsultas)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createHistoricoConsultas,
    getHistoricoConsultas,
    getHistoricoConsulta,
    deleteHistoricoConsulta,
    updateHistoricoConsulta
}