import express, { Express } from "express";
import cors from "cors";
import { init as initRouter } from "../app/routes/index.router";
export const configMiddelware = (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return;
};

export const configRouter = (app: Express) => {
  app.use("/api/v1", initRouter());
  return;
};
