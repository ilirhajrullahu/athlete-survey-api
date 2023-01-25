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
exports.athleteController = void 0;
var prisma_1 = __importDefault(require("../services/prisma"));
exports.athleteController = {
    getAllAthletes: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var athletes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_1["default"].athlete.findMany()];
                    case 1:
                        athletes = _a.sent();
                        return [2 /*return*/, res.json(athletes)];
                }
            });
        });
    },
    createAthlete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var athleteData, athlete, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        athleteData = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete.create({
                                data: {
                                    first_name: athleteData.first_name,
                                    last_name: athleteData.last_name,
                                    username: athleteData.username,
                                    athlete_password: athleteData.athlete_password
                                }
                            })];
                    case 2:
                        athlete = _a.sent();
                        return [2 /*return*/, res.json({ athlete: athlete })];
                    case 3:
                        error_1 = _a.sent();
                        res.status(400).send(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    logInAthlete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var athleteData, athlete, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        athleteData = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete.findUniqueOrThrow({
                                where: {
                                    username: athleteData.username,
                                    athlete_password: athleteData.password
                                }
                            })];
                    case 2:
                        athlete = _a.sent();
                        return [2 /*return*/, res.json({ athlete: athlete })];
                    case 3:
                        error_2 = _a.sent();
                        res.status(400).send(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getAthleteById: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var paramId, uniqueAthlete, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paramId = parseInt(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prisma_1["default"].athlete.findUnique({
                                where: {
                                    athlete_id: paramId
                                }
                            })];
                    case 2:
                        uniqueAthlete = _a.sent();
                        return [2 /*return*/, res.json({ uniqueAthlete: uniqueAthlete })];
                    case 3:
                        error_3 = _a.sent();
                        res.status(400).send(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};
//# sourceMappingURL=athlete.controller.js.map