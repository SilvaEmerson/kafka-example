import kafka from '../ClientKafka';

async function producerMenssage(): Promise<void> {
  const producer = kafka.producer();

  await producer.connect();

  const createMessage = () => ({
    key: `key-${Math.random()}`,
    value: `value:{data:{
        price: ${Math.random().toPrecision(2)},
        description: product
    }}`,
  });
  await producer.send({
    topic: 'prove-topic',
    messages: [createMessage()],
  });

  await producer.disconnect();
}

export default producerMenssage;
