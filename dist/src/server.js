"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.start = function (port) {
            return new Promise(function (resolve, reject) {
                _this.app.listen(port, function () {
                    resolve(port);
                }).on('error', function (err) { return reject(err); });
            });
        };
        this.app = (0, express_1["default"])();
        this.cors = require('cors');
        this.app.use(this.cors());
        this.middlewares();
        this.routerConfig();
    }
    Server.prototype.middlewares = function () {
        this.app.use(body_parser_1["default"].urlencoded({ extended: true }));
        this.app.use(body_parser_1["default"].json({ limit: '1mb' }));
    };
    Server.prototype.routerConfig = function () {
        this.app.use('/app/athlete', routes_1.athleteRoutes);
        this.app.use('/app/message', routes_1.messageRoutes);
        this.app.use('/app/question', routes_1.questionRoutes);
        this.app.use('/app/survey', routes_1.surveyRoutes);
        this.app.use('/app/answer', routes_1.answerRoutes);
    };
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map