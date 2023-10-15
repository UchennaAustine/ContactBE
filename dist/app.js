"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router/router"));
const App = (app) => {
    try {
        app.use(express_1.default.json());
        app.use("/api", router_1.default);
        app.use((0, cors_1.default)({
            origin: "*",
            methods: ["GET", "POST", "PATCH", "DELETE"],
        }));
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "Welcome",
                });
            }
            catch (error) {
                return res.status(400).json({
                    message: `app route error:${error}`,
                });
            }
        });
    }
    catch (error) {
        console.log(`Application Error: ${error}`);
    }
};
exports.App = App;
