"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const chalk_1 = __importDefault(require("chalk"));
const socket = __importStar(require("../sockets/sockets"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.PORT = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.getApp());
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSocket();
    }
    start(callback) {
        this.httpServer.listen(this.getPort(), callback);
    }
    getPort() {
        return this.PORT;
    }
    getApp() {
        return this.app;
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSocket() {
        this.io.on("connection", (cliente) => {
            console.log(chalk_1.default.green.bold("Nuevo cliente conectado"));
            socket.message(cliente);
            socket.disconnect(cliente);
        });
    }
}
exports.default = Server;
