import producerMenssage from './providers/producer';
import getMessage from './consumers/consumer';

setInterval(() => {
  producerMenssage();
}, 1000);
getMessage();
