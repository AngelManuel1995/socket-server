"use strict";
exports.__esModule = true;
var express_1 = require("express");
var environment_1 = require("../global/environment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.PORT = environment_1.SERVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.PORT, callback);
    };
    Server.prototype.getPort = function () {
        return this.PORT;
    };
    return Server;
}());
exports["default"] = Server;
