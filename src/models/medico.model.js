import  Sequelize  from "sequelize";
import db from "../repositories/db.js";

const Medico = db.define("medicos", {
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
    especialidade: {
        type: Sequelize.STRING,
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
})

export default Medico;