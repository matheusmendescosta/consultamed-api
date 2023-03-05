import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Paciente = db.define('pacientes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, { underscored: true })

export default Paciente;