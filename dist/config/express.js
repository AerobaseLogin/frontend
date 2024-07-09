"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configRouter = exports.configMiddelware = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_router_1 = require("../app/routes/index.router");
const configMiddelware = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    return;
};
exports.configMiddelware = configMiddelware;
const configRouter = (app) => {
    app.use("/api/v1", (0, index_router_1.init)());
    return;
};
exports.configRouter = configRouter;
