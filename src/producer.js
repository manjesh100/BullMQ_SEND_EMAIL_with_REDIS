const emailQueue = require('../src/config/queue');
//1 STEPS
async function sendEmailJob(name, email) {
  await emailQueue.add({ name,email});
  console.log('Job added to email queue');
}
module.exports = sendEmailJob;
