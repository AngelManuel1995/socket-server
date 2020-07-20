"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = require("../global/environment");
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.PORT = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.getApp());
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSocket();
    }
    Server.prototype.start = function (callback) {
        this.httpServer.listen(this.getPort(), callback);
    };
    Server.prototype.getPort = function () {
        return this.PORT;
    };
    Server.prototype.getApp = function () {
        return this.app;
    };
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.escucharSocket = function () {
        this.io.on('mensaje', function (cliente) {
            console.log('Nuevo cliente conectado', cliente);
        });
    };
    return Server;
}());
exports.default = Server;
