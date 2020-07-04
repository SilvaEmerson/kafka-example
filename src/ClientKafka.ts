import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'prove-concept',
  brokers: ['localhost:9092'],
});

export default kafka;
