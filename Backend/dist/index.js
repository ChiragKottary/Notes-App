"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/api/v1", routes_1.default);
app.listen(3000, () => {
    console.log(` App listening at http://localhost:${3000}`);
});
mongoose_1.default.connect("mongodb+srv://ckottary18:4ajza709nmavk4wr@cluster0.fdjdxav.mongodb.net/notes", { dbName: "notes" }).then(() => {
    console.log("Connected to the DataBase");
}).catch(() => {
    console.log("Error while connecting");
});
