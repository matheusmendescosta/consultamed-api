import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Especialidade = db.define(
  "especialidades",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscored: true }
);

export default Especialidade;
