import express from "express";
import wilderRouter from "./routes/wilder_route";
import skillRouter from "./routes/skill_route";

const router = express.Router();

router

  // Wilder router

  .use("/wilder", wilderRouter)

  // Skill router

  .use("/skill", skillRouter);

export default router;
