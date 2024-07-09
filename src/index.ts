import express, { Express, Request, Response } from "express";
import cors from "cors";
import { configMiddelware, configRouter } from "./config/express";

const app: Express = express();
configMiddelware(app);
configRouter(app);
// Routes Express

app.use(cors());
app.use(express.json());
app.listen(3000);
