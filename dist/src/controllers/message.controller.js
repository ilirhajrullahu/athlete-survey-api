"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.messageController = void 0;
var prisma_1 = __importDefault(require("../services/prisma"));
exports.messageController = {
    getAllMessages: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var messages, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1["default"].athlete_Message.findMany()];
                    case 1:
                        messages = _a.sent();
                        return [2 /*return*/, res.json(messages)];
                    case 2:
                        error_1 = _a.sent();
                        res.status(400).send(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    createMessage: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var messageData, message, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageData = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete_Message.create({
                                data: {
                                    message_text: messageData.message_text,
                                    message_sender: messageData.sender,
                                    message_receiver: messageData.receiver
                                }
                            })];
                    case 2:
                        message = _a.sent();
                        return [2 /*return*/, res.json({ message: message })];
                    case 3:
                        error_2 = _a.sent();
                        res.status(400).send(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getMessageById: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var paramId, uniqueMessage, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paramId = parseInt(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete.findUnique({
                                where: {}
                            })];
                    case 2:
                        uniqueMessage = _a.sent();
                        return [2 /*return*/, res.json({ uniqueMessage: uniqueMessage })];
                    case 3:
                        error_3 = _a.sent();
                        res.status(400).send(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getLatestMessageOfAdminSentFromUser: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var senderId, latestMessage, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        senderId = parseInt(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete_Message.findFirst({
                                where: {
                                    message_sender: senderId,
                                    message_receiver: 1
                                },
                                orderBy: {
                                    message_date: "desc"
                                }
                            })];
                    case 2:
                        latestMessage = _a.sent();
                        return [2 /*return*/, res.json({ latestMessage: latestMessage })];
                    case 3:
                        error_4 = _a.sent();
                        res.status(400).send(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getLatestMessageOfUserSentFromAdmin: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var senderId, latestMessage, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        senderId = parseInt(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete_Message.findFirst({
                                where: {
                                    message_receiver: senderId,
                                    message_sender: 1
                                },
                                orderBy: {
                                    message_date: "desc"
                                }
                            })];
                    case 2:
                        latestMessage = _a.sent();
                        return [2 /*return*/, res.json({ latestMessage: latestMessage })];
                    case 3:
                        error_5 = _a.sent();
                        res.status(400).send(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};
//# sourceMappingURL=message.controller.js.map