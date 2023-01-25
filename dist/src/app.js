"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var server_1 = __importDefault(require("./server"));
var port = parseInt(process.env.PORT || '4000');
var starter = new server_1["default"]().start(port)
    .then(function (port) { return console.log("Running on port ".concat(port)); })["catch"](function (error) {
    console.log(error);
});
exports["default"] = starter;
//# sourceMappingURL=app.js.map