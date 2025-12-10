const {Queue} = require('bullmq');
const emailQueue = require('./queue');

async function cancelAllJobs(){
  const delayed = await emailQueue.getDelayed();
  for(const job of delayed){
    await job.remove();
    console.log("Deleted Job now",job.id);
  }
   const waiting = await emailQueue.getWaiting();
  for (const job of waiting) {
    await job.remove();
    console.log("Canceled waiting job:", job.id);
  }

    const active = await emailQueue.getActive();
  for (const job of active) {
    try {
      await job.remove();
      console.log("Canceled active job:", job.id);
    } catch {
      console.log(`Cannot cancel active job ${job.id}, it's locked by worker`);
    }
  }
   const completed = await emailQueue.getCompleted();
  for (const job of completed) {
    await job.remove();
    console.log("Removed completed job:", job.id);
  }

  // Cancel Failed Jobs
  const failed = await emailQueue.getFailed();
  for (const job of failed) {
    await job.remove();
    console.log("Removed failed job:", job.id);
  }

  // Cancel Repeatable Jobs
  const repeatable = await emailQueue.getRepeatableJobs();
  for (const job of repeatable) {
    await emailQueue.removeRepeatableByKey(job.key);
    console.log("Removed repeatable job:", job.key);
  }

  console.log("All jobs removed.");

}
module.exports = cancelAllJobs;

 
