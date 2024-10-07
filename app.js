const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const queue = require('./queue');
const task = require('./task');

app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // 20 tasks per minute
  delayMs: 0, // no delay
  keyGenerator: (req) => req.body.user_id,
});

app.post('/task', limiter, async (req, res) => {
  try {
    const userId = req.body.user_id;
    queue.addTask(userId, async () => {
      await task(userId);
      res.status(200).send(`Task completed for user ${userId}`);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});