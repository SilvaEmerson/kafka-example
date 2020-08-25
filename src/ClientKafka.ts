import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'prove-server',
  brokers: ['localhost:9092'],
});

export default kafka;
