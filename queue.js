const redis = require('redis');

const client = redis.createClient({ host: 'localhost', port: 6379 });

const queue = {
  addTask: (userId, task) => {
    console.log(`Adding task to queue for user ${userId}`);
    client.lpush(`task:queue:${userId}`, JSON.stringify(task));
  },
  processTasks: () => {
    console.log('Processing tasks');
    client.brpoplpush('task:queue', 'task:processing', 0, (err, task) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Processing task for user ${task.userId}`);
        task().then(() => {
          console.log(`Task completed for user ${task.userId}`);
          client.lrem('task:processing', 0, JSON.stringify(task));
        }).catch((err) => {
          console.error(err);
        });
      }
    });
  },
};

setInterval(queue.processTasks, 1000); // process tasks every 1 second

module.exports = queue;