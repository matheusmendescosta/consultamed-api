import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();

const username = process.env.username;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;

console.log(host);

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

try {
  await sequelize.authenticate();
  console.log("Conexão estabelecida com sucesso");
} catch (error) {
  console.error("Não foi possivel estabelecer conexão com o banco de dados:", error);
}

export default sequelize;
