# Task Queue Solution

This solution uses Bull Queue to manage a task queue and Redis as the storage engine.

## Prerequisites

* Node.js 14 or higher
* Redis 6 or higher
* Bull Queue 4 or higher

## Installation

1. Install the dependencies by running `npm install`
2. Create a `.env` file with the following environment variables:
	* `REDIS_HOST`: the host of the Redis instance
	* `REDIS_PORT`: the port of the Redis instance

## Running the Solution

1. Start the Redis instance by running `redis-server`
2. Start the task queue by running `node task-queue.js`

## Testing the Solution

1. Use a tool like Postman to send multiple requests to `http://localhost:3000/task` with different user IDs.
2. Verify that the task is processed correctly by checking the task log file

## Environment Variables

* `REDIS_HOST`: the host of the Redis instance
* `REDIS_PORT`: the port of the Redis instance