"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../controller/users.controller"));
const router = express_1.default.Router();
const { getUser } = users_controller_1.default;
router.get("/", getUser);
exports.default = router;
