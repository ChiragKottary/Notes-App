"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const notesSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.Notes = mongoose_1.default.model("Notes", notesSchema);
