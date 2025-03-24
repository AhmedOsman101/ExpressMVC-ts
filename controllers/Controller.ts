import type { Request, Response } from "express";
import type { Model } from "sequelize";

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
  // selects one record by id
  abstract find(key: number | string): any;
}

export default Controller;
