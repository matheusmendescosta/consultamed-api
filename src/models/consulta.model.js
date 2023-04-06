import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Paciente from "./paciente.model.js";
import Medico from "./medico.model.js";

const Consulta = db.define(
  "consultas",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    hora: {
      type: Sequelize.TIME,
      allowNull: false,
    },
  },
  { underscored: true }
);

Consulta.belongsTo(Paciente, { foreignKey: "pacienteId" });
Consulta.belongsTo(Medico, { foreignKey: "medicoId" });

export default Consulta;
