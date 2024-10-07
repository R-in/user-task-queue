module.exports = {
    apps: [
      {
        name: 'user-task-queuing',
        script: 'app.js',
        instances: 2,
        exec_mode: 'cluster',
        watch: true,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };