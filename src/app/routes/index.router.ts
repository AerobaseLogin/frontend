import express, { Router } from "express";
import userRouter from "./user.router";
//Config router
export const init = (): Router => {
  const router = express.Router();
  router.use("/users", userRouter);
  return router;
};
