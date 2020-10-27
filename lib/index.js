#!/usr/bin/env node
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
        while (_) try {
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
require("colors");
var csharp_like_custom_console_1 = __importDefault(require("csharp-like-custom-console"));
var fs_1 = require("fs");
var os_1 = require("os");
var path_1 = require("path");
var process_1 = require("process");
var child_process_1 = require("child_process");
var readFile = fs_1.promises.readFile, writeFile = fs_1.promises.writeFile, unlink = fs_1.promises.unlink, mkdir = fs_1.promises.mkdir, rmdir = fs_1.promises.rmdir, readdir = fs_1.promises.readdir, stat = fs_1.promises.stat;
var Console = new csharp_like_custom_console_1["default"]({
    inp: process.stdin,
    out: process.stdout
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function cwd() {
            return __awaiter(this, void 0, void 0, function () {
                var cwd;
                return __generator(this, function (_a) {
                    cwd = process.cwd();
                    if (process.platform == "win32") {
                        cwd = cwd.replace(/(\\)/g, "/");
                        cwd = cwd.replace("C:/Users/" + os_1.userInfo().username, "~");
                    }
                    else
                        cwd = "~" + cwd;
                    return [2 /*return*/, cwd];
                });
            });
        }
        function ask() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _b = (_a = Console).Read;
                            _c = "";
                            return [4 /*yield*/, cwd()];
                        case 1:
                            _b.apply(_a, [_c + (_d.sent()).yellow + "$".grey + " ",
                                function (answer) { return __awaiter(_this, void 0, void 0, function () {
                                    var _a, words, filenames, _i, filenames_1, filename, _b, _c, _d, _e, _f, _g, filenames_, _h, filenames_2, filename_, _j, filenames__, _k, filenames__1, filename__, _l, foldernames, _m, foldernames_1, foldername, foldernames_, _o, foldernames_2, foldername_, _p, _q, f, _r, _s, f, fileorfoldernames, useYarn, useYarn_, useYarn__;
                                    var _this = this;
                                    return __generator(this, function (_t) {
                                        switch (_t.label) {
                                            case 0:
                                                answer = answer.trim();
                                                _a = answer.split(" ")[0];
                                                switch (_a) {
                                                    case "": return [3 /*break*/, 1];
                                                    case "help": return [3 /*break*/, 2];
                                                    case "echo": return [3 /*break*/, 3];
                                                    case "touch": return [3 /*break*/, 5];
                                                    case "cat": return [3 /*break*/, 12];
                                                    case "type": return [3 /*break*/, 16];
                                                    case "rm": return [3 /*break*/, 20];
                                                    case "del": return [3 /*break*/, 29];
                                                    case "cd": return [3 /*break*/, 38];
                                                    case "chdir": return [3 /*break*/, 39];
                                                    case "cls": return [3 /*break*/, 40];
                                                    case "clear": return [3 /*break*/, 41];
                                                    case "md": return [3 /*break*/, 42];
                                                    case "mkdir": return [3 /*break*/, 49];
                                                    case "ls": return [3 /*break*/, 56];
                                                    case "dir": return [3 /*break*/, 62];
                                                    case "exit": return [3 /*break*/, 68];
                                                    case "code@code": return [3 /*break*/, 69];
                                                    case "node@init": return [3 /*break*/, 70];
                                                    case "node@script": return [3 /*break*/, 71];
                                                    case "node@start": return [3 /*break*/, 72];
                                                    case "typescript@tsc": return [3 /*break*/, 73];
                                                }
                                                return [3 /*break*/, 74];
                                            case 1: return [3 /*break*/, 75];
                                            case 2:
                                                Console.Write(("" + ("COMMANDS".red + "@BASIC".gray)).bold);
                                                Console.Write("help".green + " ".red);
                                                Console.Write(" Show this page");
                                                Console.Write("echo".green + " [...text]".red);
                                                Console.Write(" Echos the text joined together with ' '");
                                                Console.Write(" Refreshes");
                                                Console.Write("touch".green + " [...filenames]".red);
                                                Console.Write(" Makes the files with the corresponding filenames");
                                                Console.Write("cat".green + " / " + "type".green + " [filename]".red);
                                                Console.Write(" Writes out the contents of that file tith the corresponding filename");
                                                Console.Write("rm".green + " / " + "del".green + " [...filenames]".red);
                                                Console.Write(" Removes the files with the corresponding filenames");
                                                Console.Write("cd".green + " / " + "chdir".green + " [path]".red);
                                                Console.Write(" Changes the current working directory to the corresponding path");
                                                Console.Write("cls".green + " / " + "clear".green + " ".red);
                                                Console.Write(" Clears the bash");
                                                Console.Write("md".green + " / " + "mkdir".green + "[...foldernames]".red);
                                                Console.Write(" Makes the directories corresponding to the foldernames");
                                                Console.Write("ls".green + " / " + "dir".green + " ".red);
                                                Console.Write(" Shows the files in the current working directory");
                                                Console.Write("exit".green + " ".red);
                                                Console.Write(" Exit the bash");
                                                Console.Write(("" + ("COMMANDS".red + "@CODE".gray)).bold);
                                                Console.Write("code@".gray + "code".green + " [...fileorfoldernames]".red);
                                                Console.Write(" Opens the corresponding fileorfoldernames in vscode");
                                                Console.Write(("" + ("COMMANDS".red + "@NODE".gray)).bold);
                                                Console.Write("node@".gray + "init".green + " (--useYarn) (-Y)".red);
                                                Console.Write(" Inits a node project with npm, or if --useYarn/-Y is specified, yarn, and say yes to every question");
                                                Console.Write("node@".gray +
                                                    "script".green +
                                                    " [scriptname] (--useYarn) (-Y)".red);
                                                Console.Write(" Runs the script with the corresponding scriptname with npm, or if --useYarn/-Y is specified, yarn (doesn't display output)");
                                                Console.Write("node@".gray + "start".green + " (--useYarn) (-Y)".red);
                                                Console.Write(" Runs `node@run start (--useYarn if --useYarn/-Y is specified)` (doesn't display output)");
                                                Console.Write(("" + ("COMMANDS".red + "@TYPESCRIPT".gray)).bold);
                                                Console.Write("typescript@".gray + "tsc".green + " ".red);
                                                Console.Write(" Compiles typescript with the options in tsconfig.json");
                                                return [3 /*break*/, 75];
                                            case 3: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var words;
                                                    return __generator(this, function (_a) {
                                                        words = answer.split(" ");
                                                        words.shift();
                                                        return [2 /*return*/, words];
                                                    });
                                                }); })()];
                                            case 4:
                                                words = _t.sent();
                                                Console.Write(words.join(" "));
                                                return [3 /*break*/, 75];
                                            case 5: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var filenames;
                                                    return __generator(this, function (_a) {
                                                        filenames = answer.split(" ");
                                                        filenames.shift();
                                                        return [2 /*return*/, filenames];
                                                    });
                                                }); })()];
                                            case 6:
                                                filenames = _t.sent();
                                                _i = 0, filenames_1 = filenames;
                                                _t.label = 7;
                                            case 7:
                                                if (!(_i < filenames_1.length)) return [3 /*break*/, 11];
                                                filename = filenames_1[_i];
                                                if (!fs_1.existsSync(filename)) return [3 /*break*/, 8];
                                                Console.Write("FATAL".red.bold + " " + filename + " already exists");
                                                return [3 /*break*/, 10];
                                            case 8: return [4 /*yield*/, writeFile(filename, "")];
                                            case 9:
                                                _t.sent();
                                                _t.label = 10;
                                            case 10:
                                                _i++;
                                                return [3 /*break*/, 7];
                                            case 11: return [3 /*break*/, 75];
                                            case 12:
                                                _t.trys.push([12, 14, , 15]);
                                                _c = (_b = Console).Write;
                                                return [4 /*yield*/, readFile(answer.split(" ")[1])];
                                            case 13:
                                                _c.apply(_b, [(_t.sent()).toString()]);
                                                return [3 /*break*/, 15];
                                            case 14:
                                                _d = _t.sent();
                                                Console.Write("FATAL".red.bold + " " + answer.split(" ")[1] + " doesn't exist");
                                                return [3 /*break*/, 15];
                                            case 15: return [3 /*break*/, 75];
                                            case 16:
                                                _t.trys.push([16, 18, , 19]);
                                                _f = (_e = Console).Write;
                                                return [4 /*yield*/, readFile(answer.split(" ")[1])];
                                            case 17:
                                                _f.apply(_e, [(_t.sent()).toString()]);
                                                return [3 /*break*/, 19];
                                            case 18:
                                                _g = _t.sent();
                                                Console.Write("FATAL".red.bold + " " + answer.split(" ")[1] + " doesn't exist");
                                                return [3 /*break*/, 19];
                                            case 19: return [3 /*break*/, 75];
                                            case 20: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var filenames_;
                                                    return __generator(this, function (_a) {
                                                        filenames_ = answer.split(" ");
                                                        filenames_.shift();
                                                        return [2 /*return*/, filenames_];
                                                    });
                                                }); })()];
                                            case 21:
                                                filenames_ = _t.sent();
                                                _h = 0, filenames_2 = filenames_;
                                                _t.label = 22;
                                            case 22:
                                                if (!(_h < filenames_2.length)) return [3 /*break*/, 28];
                                                filename_ = filenames_2[_h];
                                                if (!!fs_1.existsSync(filename_)) return [3 /*break*/, 23];
                                                Console.Write("FATAL".red.bold + " " + filename_ + " doesn't exist");
                                                return [3 /*break*/, 27];
                                            case 23:
                                                _t.trys.push([23, 25, , 27]);
                                                return [4 /*yield*/, unlink(filename_)];
                                            case 24:
                                                _t.sent();
                                                return [3 /*break*/, 27];
                                            case 25:
                                                _j = _t.sent();
                                                return [4 /*yield*/, rmdir(filename_, { recursive: true })];
                                            case 26:
                                                _t.sent();
                                                return [3 /*break*/, 27];
                                            case 27:
                                                _h++;
                                                return [3 /*break*/, 22];
                                            case 28: return [3 /*break*/, 75];
                                            case 29: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var filenames__;
                                                    return __generator(this, function (_a) {
                                                        filenames__ = answer.split(" ");
                                                        filenames__.shift();
                                                        return [2 /*return*/, filenames__];
                                                    });
                                                }); })()];
                                            case 30:
                                                filenames__ = _t.sent();
                                                _k = 0, filenames__1 = filenames__;
                                                _t.label = 31;
                                            case 31:
                                                if (!(_k < filenames__1.length)) return [3 /*break*/, 37];
                                                filename__ = filenames__1[_k];
                                                if (!!fs_1.existsSync(filename__)) return [3 /*break*/, 32];
                                                Console.Write("FATAL".red.bold + " " + filename__ + " doesn't exist");
                                                return [3 /*break*/, 36];
                                            case 32:
                                                _t.trys.push([32, 34, , 36]);
                                                return [4 /*yield*/, unlink(filename__)];
                                            case 33:
                                                _t.sent();
                                                return [3 /*break*/, 36];
                                            case 34:
                                                _l = _t.sent();
                                                return [4 /*yield*/, rmdir(filename__, { recursive: true })];
                                            case 35:
                                                _t.sent();
                                                return [3 /*break*/, 36];
                                            case 36:
                                                _k++;
                                                return [3 /*break*/, 31];
                                            case 37: return [3 /*break*/, 75];
                                            case 38:
                                                if (!fs_1.existsSync(answer.split(" ")[1])) {
                                                    Console.Write("FATAL".red.bold + " path doesn't exist");
                                                }
                                                else {
                                                    process_1.chdir(path_1.join(process.cwd(), answer.split(" ")[1]));
                                                    if (process.cwd() == "C:\\" || process.cwd() == "C:\\Users") {
                                                        Console.Write("FATAL".red.bold + " path doesn't exist");
                                                        process_1.chdir("C:\\Users\\" + os_1.userInfo().username);
                                                    }
                                                }
                                                return [3 /*break*/, 75];
                                            case 39:
                                                if (!fs_1.existsSync(answer.split(" ")[1])) {
                                                    Console.Write("FATAL".red.bold + " path doesn't exist");
                                                }
                                                else {
                                                    process_1.chdir(path_1.join(process.cwd(), answer.split(" ")[1]));
                                                    if (process.cwd() == "C:\\" || process.cwd() == "C:\\Users") {
                                                        Console.Write("FATAL".red.bold + " path doesn't exist");
                                                        process_1.chdir("C:\\Users\\" + os_1.userInfo().username);
                                                    }
                                                }
                                                return [3 /*break*/, 75];
                                            case 40:
                                                Console.Clear();
                                                return [3 /*break*/, 75];
                                            case 41:
                                                Console.Clear();
                                                return [3 /*break*/, 75];
                                            case 42: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var foldernames;
                                                    return __generator(this, function (_a) {
                                                        foldernames = answer.split(" ");
                                                        foldernames.shift();
                                                        return [2 /*return*/, foldernames];
                                                    });
                                                }); })()];
                                            case 43:
                                                foldernames = _t.sent();
                                                _m = 0, foldernames_1 = foldernames;
                                                _t.label = 44;
                                            case 44:
                                                if (!(_m < foldernames_1.length)) return [3 /*break*/, 48];
                                                foldername = foldernames_1[_m];
                                                if (!fs_1.existsSync(foldername)) return [3 /*break*/, 45];
                                                Console.Write("FATAL".red.bold + " " + foldername + " already exists");
                                                return [3 /*break*/, 47];
                                            case 45: return [4 /*yield*/, mkdir(foldername)];
                                            case 46:
                                                _t.sent();
                                                _t.label = 47;
                                            case 47:
                                                _m++;
                                                return [3 /*break*/, 44];
                                            case 48: return [3 /*break*/, 75];
                                            case 49: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var foldernames_;
                                                    return __generator(this, function (_a) {
                                                        foldernames_ = answer.split(" ");
                                                        foldernames_.shift();
                                                        return [2 /*return*/, foldernames_];
                                                    });
                                                }); })()];
                                            case 50:
                                                foldernames_ = _t.sent();
                                                _o = 0, foldernames_2 = foldernames_;
                                                _t.label = 51;
                                            case 51:
                                                if (!(_o < foldernames_2.length)) return [3 /*break*/, 55];
                                                foldername_ = foldernames_2[_o];
                                                if (!fs_1.existsSync(foldername_)) return [3 /*break*/, 52];
                                                Console.Write("FATAL".red.bold + " " + foldername_ + " already exists");
                                                return [3 /*break*/, 54];
                                            case 52: return [4 /*yield*/, mkdir(foldername_)];
                                            case 53:
                                                _t.sent();
                                                _t.label = 54;
                                            case 54:
                                                _o++;
                                                return [3 /*break*/, 51];
                                            case 55: return [3 /*break*/, 75];
                                            case 56:
                                                _p = 0;
                                                return [4 /*yield*/, readdir(process.cwd())];
                                            case 57:
                                                _q = _t.sent();
                                                _t.label = 58;
                                            case 58:
                                                if (!(_p < _q.length)) return [3 /*break*/, 61];
                                                f = _q[_p];
                                                return [4 /*yield*/, stat(f)];
                                            case 59:
                                                if ((_t.sent()).isDirectory()) {
                                                    Console.Write(f.cyan);
                                                }
                                                else if (!f.includes(".")) {
                                                    Console.Write(f.magenta);
                                                }
                                                else
                                                    Console.Write(f);
                                                _t.label = 60;
                                            case 60:
                                                _p++;
                                                return [3 /*break*/, 58];
                                            case 61: return [3 /*break*/, 75];
                                            case 62:
                                                _r = 0;
                                                return [4 /*yield*/, readdir(process.cwd())];
                                            case 63:
                                                _s = _t.sent();
                                                _t.label = 64;
                                            case 64:
                                                if (!(_r < _s.length)) return [3 /*break*/, 67];
                                                f = _s[_r];
                                                return [4 /*yield*/, stat(f)];
                                            case 65:
                                                if ((_t.sent()).isDirectory()) {
                                                    Console.Write(f.cyan);
                                                }
                                                else if (!f.includes(".")) {
                                                    Console.Write(f.magenta);
                                                }
                                                else
                                                    Console.Write(f);
                                                _t.label = 66;
                                            case 66:
                                                _r++;
                                                return [3 /*break*/, 64];
                                            case 67: return [3 /*break*/, 75];
                                            case 68:
                                                Console.Die();
                                                return [3 /*break*/, 75];
                                            case 69:
                                                fileorfoldernames = answer.slice(10);
                                                child_process_1.exec("code " + fileorfoldernames);
                                                return [3 /*break*/, 75];
                                            case 70:
                                                useYarn = answer.split(" ").includes("--useYarn") ||
                                                    answer.split(" ").includes("-Y");
                                                child_process_1.exec((useYarn ? "yarn" : "npm") + " init --yes");
                                                return [3 /*break*/, 75];
                                            case 71:
                                                useYarn_ = answer.split(" ").includes("--useYarn") ||
                                                    answer.split(" ").includes("-Y");
                                                child_process_1.exec((useYarn_ ? "yarn" : "npm") + " run " + answer.split(" ")[1]);
                                                _t.label = 72;
                                            case 72:
                                                useYarn__ = answer.split(" ").includes("--useYarn") ||
                                                    answer.split(" ").includes("-Y");
                                                child_process_1.exec((useYarn__ ? "yarn" : "npm") + " start");
                                                return [3 /*break*/, 75];
                                            case 73:
                                                child_process_1.exec("tsc");
                                                return [3 /*break*/, 75];
                                            case 74:
                                                Console.Write("Bad command. Type " + "help".green.bold + " for help");
                                                return [3 /*break*/, 75];
                                            case 75: return [4 /*yield*/, ask()];
                                            case 76:
                                                _t.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }]);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, cwd()];
                case 1:
                    if (!(_g.sent()).includes("~")) {
                        process_1.chdir(os_1.homedir());
                    }
                    Console.Clear();
                    _b = (_a = Console).Write;
                    _c = "" + "bcsh".bold;
                    _d = "@";
                    _f = (_e = JSON).parse;
                    return [4 /*yield*/, readFile(path_1.join(__dirname, "../package.json"))];
                case 2:
                    _b.apply(_a, [_c + (_d + _f.apply(_e, [(_g.sent()).toString()]).version).grey]);
                    ask();
                    return [2 /*return*/];
            }
        });
    });
}
main();
