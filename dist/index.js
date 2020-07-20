"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var routes_1 = __importDefault(require("./routes/routes"));
var cors_1 = __importDefault(require("cors"));
var server = server_1.default.instance;
server.getApp().use(cors_1.default({ origin: true, credentials: true }));
server.getApp().use(routes_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + server.getPort());
});
