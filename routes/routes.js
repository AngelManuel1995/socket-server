"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Todo está OK /GET'
    });
});
router.post('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Todo está OK /POST'
    });
});
exports["default"] = router;
