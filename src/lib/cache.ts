import { createClient } from 'redis';

const redisClient = createClient();

async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export default connectRedis;
