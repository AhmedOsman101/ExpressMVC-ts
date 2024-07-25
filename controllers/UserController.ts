import { Request, Response } from "express";
import { UserAttributes } from "../interfaces/interfaces";
import User from "../models/User";
import Controller from "./Controller";
import { json } from "sequelize";

class UserController extends Controller<User> {
	public async index(req: Request, res: Response) {
		try {
			const users = await User.findAll();
			return res.json(users);
		} catch (error) {}
	}

	public async getOne(key: number) {
		try {
			const user = await User.findByPk(key);
			return user; // If user is found, return it
		} catch (error) {
			console.error("Error fetching user:", error);
			throw new Error("Error fetching user"); // Throw an error if an error occurs
		}
	}

	public async show(req: Request, res: Response) {
		try {
			const id: number = +req.params?.id;

			const user = await User.findByPk(id);

			if (user) return res.json(user);

			return res.status(404).json({ message: "user was not found" });
		} catch (error) {
			return res.status(400).json({ message: error });
		}
	}

	public async create(req: Request, res: Response) {
		try {
			const { username, email, password }: UserAttributes = req.body;
			// Create a new user with the extracted properties
			const newUser = await User.create({ username, email, password });
			// Return the newly created user
			return res.status(201).json(newUser);
		} catch (error) {
			return res.status(400).json({ message: req.body });
		}
	}

	public async update(req: Request, res: Response) {
		try {
			const id: number = +req.params?.id;

			let user = await this.getOne(id);
			if (!user) {
				return res.status(404).json({ error: "User not found" });
			}

			const { username, email, password }: UserAttributes = req.body;

			const newData = { username, email, password };
			// Update the user with the specified ID
			user = { username, email, password };
			// Return the updated user
			return res.json(user);
		} catch (error) {
			return res.status(400).send(error);
		}
	}

	public async destroy(req: Request, res: Response) {
		try {
			const id: number = +req.params?.id;

			const user = await this.getOne(id);

			if (user) {
				const deletedUser = await User.destroy();
				return res.json(deletedUser);
			}
			return res.status(404).json({ message: "user was not found" });
		} catch (error) {
			return res.status(400).json({ message: error });
		}
	}
}

export default new UserController();
