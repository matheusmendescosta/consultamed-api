import medicoService from "../service/medico.service.js";

async function createMedico (req, res, next) {
    try {
        let medico = req.body;
        if(!medico.nome || !medico.especialidade || !medico.telefone || !medico.email){
            throw new Error ("Campos obrigatorios")
        }
        medico = await medicoService.createMedico(medico)
        res.send(medico)
        logger.info(`POST /medico ${JSON.stringify(medico)}`)
    } catch (error) {
        next(error)
    }
}

async function getMedicos(req, res, next) {
    try {
        res.send(await medicoService.getMedicos())
        logger.info(`GET /medicos`)
    } catch (error) {
        next(error)
    }
}

async function getMedico(req, res, next) {
    try {
        res.send(await medicoService.getMedico(req.params.id))
        logger.info(`GET /medico`)
    } catch (error) {
        next(error)
    }
}

async function deleteMedico(req, res, next) {
    try {
        res.send(await medicoService.deleteMedico(req.params.id))
        res.end()
        logger.info(`DELETE /medico ${JSON.stringify(medico)}`)
    } catch (error) {
        next(error)
    }
}

async function updateMedico(req, res, next) {
    try {
        let medico = req.body
        if(!medico.nome || !medico.especialidade || !medico.telefone || !medico.email){
            throw new Error ("Campos obrigatorios")
        }
        medico = await medicoService.updateMedico(medico)
        res.send(medico)
        logger.info(`PUT /medico ${JSON.stringify(medico)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createMedico,
    getMedicos,
    getMedico,
    deleteMedico,
    updateMedico
}