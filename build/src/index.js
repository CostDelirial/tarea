"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_class_1 = __importDefault(require("./classes/server.class"));
const server = server_class_1.default.instance;
server.app.enable('trust proxy');
server.app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.app.use(express_1.default.json({ limit: '50mb' }));
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//server.app.use(routers)
server.start();
