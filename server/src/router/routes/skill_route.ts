import express from "express";
import SkillController from "../../controller/SkillController";

const router = express.Router();
const skillController = new SkillController();

router
  .get("/", skillController.read)
  .post("/", skillController.create)
  .put("/:id", skillController.update)
  .delete("/:id", skillController.delete);

export default router;
