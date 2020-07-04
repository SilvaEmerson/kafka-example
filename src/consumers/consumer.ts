import kafka from '../ClientKafka';
import consoleLogExecution from '../service';

async function getMessage(): Promise<void> {
  const consumer = kafka.consumer({ groupId: 'prove-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'prove-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      consoleLogExecution(message.value.toString());
    },
  });
}

export default getMessage;
