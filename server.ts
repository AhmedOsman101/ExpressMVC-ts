// Import required modules
import express, { Request, Response } from "express";
const cors = require("cors");

import env from "./config/env";
import sequelize from "./config/database";
import UserRouter from "./routes/UserRouter";

const app = express();
const port: number = env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "The Api is Up and Running !" });
});

sequelize.sync().then((req) => {
	app.listen(port, async () => {
		console.log(`Server is running on: http://localhost:${port}`);
	});
});
