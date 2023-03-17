import dataSource from "../utils";
import { Skill } from "../entity/Skill";
import { Request, Response } from "express";

class SkillController {
  // private readonly repository = dataSource.getRepository(Skill);
  async create(req: Request, res: Response): Promise<void> {
    try {
      await dataSource.getRepository(Skill).save(req.body);
      res.status(201).send("Created Skill");
    } catch (err: any) {
      if (err.code === "SQLITE_CONSTRAINT") {
        res.status(409).send("Skill already exists");
        return;
      }
      console.error(err);
      res.status(400).send("Error while creating Skill");
    }
  }

  async read(req: Request, res: Response): Promise<void> {
    try {
      const data = await dataSource.getRepository(Skill).find();
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while reading Skill");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedSkill = await dataSource
        .getRepository(Skill)
        .update(req.params.id, req.body);
      res.status(201).send(updatedSkill);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while updating Skill");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const skillId = req.params.id;
      const existingSkill = await dataSource.getRepository(Skill).findOneBy({
        id: parseInt(skillId),
      });
      if (existingSkill === null) {
        res.status(404).send("Skill not found");
        return;
      }
      const deletedSkill = await dataSource
        .getRepository(Skill)
        .delete(req.params.id);
      res.status(200).send(deletedSkill);
    } catch (err) {
      console.error(err);
      res.status(400).send("Error while deleting Skill");
    }
  }
}

export default SkillController;
