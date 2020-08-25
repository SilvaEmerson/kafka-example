"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var producer_1 = __importDefault(require("./providers/producer"));
var consumer_1 = __importDefault(require("./consumers/consumer"));
setInterval(function () {
    producer_1.default();
}, 1000);
consumer_1.default();
