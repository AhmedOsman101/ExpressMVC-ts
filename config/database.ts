// Import Sequelize and required modules
import { Sequelize } from "sequelize-typescript";
import env from "../config/env";

// Initialize Sequelize with database connection options
const sequelize: Sequelize = new Sequelize({
	dialect: "mysql",
	host: env.DB_HOST,
	port: env.DB_PORT,
	username: env.DB_USER,
	password: env.DB_PASSWORD,
	database: env.DB_DATABASE,
});

export default sequelize;
