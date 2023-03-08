import Sequelize from 'sequelize'
import db from '../repositories/db.js'
import Consulta from './consulta.model.js';

const HistoricoConsultas = db.define('historico_consultas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataHota: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    sintomas: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    diagnostico: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    tratamento: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, { underscored: true })

HistoricoConsultas.belongsTo(Consulta, {foreignKey: "consultaId"})

export default HistoricoConsultas;