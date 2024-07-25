import { Model } from "sequelize";
import { Request, Response } from "express";

abstract class Controller<T extends Model> {
	// retrieve all records
	abstract index(req: Request, res: Response): any;
	// select one record
	abstract show(req: Request, res: Response): any;
	// create new record
	abstract create(req: Request, res: Response): any;
	// update existing record
	abstract update(req: Request, res: Response): any;
	// delete a record
	abstract destroy(req: Request, res: Response): any;
	// return a record
	abstract getOne(key: any): any;
}

export default Controller;
