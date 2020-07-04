"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kafkajs_1 = require("kafkajs");
var kafka = new kafkajs_1.Kafka({
    clientId: 'prove-concept',
    brokers: ['localhost:9092'],
});
exports.default = kafka;
