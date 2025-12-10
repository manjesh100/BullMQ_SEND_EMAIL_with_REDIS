const Queue = require('bull');
//Redis Connection DB
const redisConfig = { host: '127.0.0.1', port: 6379 };
//Define a queue named 'email'
const emailQueue = new Queue('email', { redis: redisConfig,
    defaultJobOptions:{
        attempts:5,
        backoff:{
            type:"exponential",
            delay:5000
        },
        removeOnComplete:true,
        removeOnFail:true,
        priority:1,
    },
    settings:{
        guardInterval:5000,
        stalledInterval:30000,
        maxStalledCount:2,
        retryProcessDelay:5000
    },
    limiter:{
          max:50,
          duration:10000,
    },
 });
module.exports = emailQueue;


