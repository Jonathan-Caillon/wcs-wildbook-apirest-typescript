import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Request, Response } from "express";

class WilderController {
  // private readonly repository = dataSource.getRepository(Wilder);
  async create(req: Request, res: Response): Promise<void> {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.status(201).send("Created Wilder");
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while creating Wilder");
    }
  }

  async read(req: Request, res: Response): Promise<void> {
    try {
      const data = await dataSource.getRepository(Wilder).find();
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while reading Wilder");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const wilderId = req.params.id;
      const existingWilder = await dataSource.getRepository(Wilder).findOneBy({
        id: parseInt(wilderId),
      });
      if (existingWilder === null) {
        res.status(404).send("Wilder not found");
        return;
      }
      const updatedUser = await dataSource
        .getRepository(Wilder)
        .update(wilderId, req.body);
      res.status(201).send(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while updating Wilder");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const wilderId = req.params.id;
      const existingWilder = await dataSource.getRepository(Wilder).findOneBy({
        id: parseInt(wilderId),
      });
      if (existingWilder === null) {
        res.status(404).send("Wilder not found");
        return;
      }
      await dataSource.getRepository(Wilder).delete(wilderId);
      res.status(200).send("Deleted Wilder");
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while deleting Wilder");
    }
  }

  async addSkill(req: Request, res: Response): Promise<void> {
    try {
      const wilderToUpdate = await dataSource.getRepository(Wilder).findOneBy({
        id: parseInt(req.params.wilderId),
      });
      if (wilderToUpdate === null) {
        res.status(404).send("Wilder not found");
        return;
      }
      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ id: parseInt(req.params.skillId) });
      if (skillToAdd === null) {
        res.status(404).send("Skill not found");
        return;
      }
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.status(201).send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.status(400).send("Error while adding skill to wilder");
    }
  }
}

export default WilderController;
