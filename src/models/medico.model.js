import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Especialidade from "./especialidade.model.js";

const Medico = db.define(
  "medicos",
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
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    crm: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { underscored: true }
);

Medico.belongsTo(Especialidade, { foreignKey: "especialidadeId" });

export default Medico;
