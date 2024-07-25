import dotenv from "dotenv";

dotenv.config();

interface EnvVars {
	SERVER_PORT: number;
	DB_CONNECTION: string;
	DB_HOST: string;
	DB_USER: string;
	DB_PASSWORD: string;
	DB_DATABASE: string;
	DB_PORT: number;
}

const env: EnvVars = {
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_USER: process.env.DB_USER || "root",
	DB_PASSWORD: process.env.DB_PASSWORD || "",
	SERVER_PORT: parseInt(process.env.SERVER_PORT || "5000"),
	DB_CONNECTION: process.env.DB_CONNECTION || "mysql",
	DB_DATABASE: process.env.DB_DATABASE || "test_db",
	DB_PORT: parseInt(process.env.DB_PORT || "3306"),
};

export default env;
