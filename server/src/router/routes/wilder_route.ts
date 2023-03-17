import express from "express";
import WilderController from "../../controller/WilderController";

const router = express.Router();
const wilderController = new WilderController();

router
  .get("/", wilderController.read)
  .post("/", wilderController.create)
  .put("/:id", wilderController.update)
  .delete("/:id", wilderController.delete)
  .post("/:wilderId/skill/:skillId", wilderController.addSkill);

export default router;
