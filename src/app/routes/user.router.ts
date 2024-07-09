import express from "express";
import User from "../controller/users.controller";
const router = express.Router();

const { getUser } = User;
router.get("/", getUser);

export default router;
