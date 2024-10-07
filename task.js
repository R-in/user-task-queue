const logger = require('./logger');

async function task(userId) {
  try {
    console.log(`Processing task for user ${userId}`);
    // Simulate some work being done
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    console.log(`Task completed for user ${userId}`);
    logger.log(`Task completed for user ${userId} at ${Date.now()}`);
  } catch (error) {
    console.error(`Error processing task for user ${userId}: ${error}`);
    throw error;
  }
}

module.exports = task;