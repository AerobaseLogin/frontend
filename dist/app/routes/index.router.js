"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./user.router"));
//Config router
const init = () => {
    const router = express_1.default.Router();
    router.use("/users", user_router_1.default);
    return router;
};
exports.init = init;
