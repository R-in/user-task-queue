const pm2 = require('pm2');

pm2.start({
  script: 'app.js',
  instances: 2,
  exec_mode: 'cluster',
}, (err, apps) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Cluster started with 2 instances');
  }
});