import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Paciente = db.define(
  "pacientes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
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
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    alergia: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    tipo_alergia: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rua: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    municipio: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    numero: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    cep: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    doenca_cronica: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    tipo_doenca_cronica: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    medicacao_continua: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    tipo_medicacao_continua: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    image_perfil: {
      type: Sequelize.BLOB,
      allowNull: true,
    },
  },
  { underscored: true }
); //entende o _ ex: data_nascimento

export default Paciente;
