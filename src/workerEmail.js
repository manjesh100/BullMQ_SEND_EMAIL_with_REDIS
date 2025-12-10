//STEPS 2 AS WORKER
const fs = require('fs');
const path = require("path");
const emailQueue = require('./config/queue');
const mailClass = require('../src/util/emailer');
const logger = require('./util/logger');
emailQueue.process(async (job) => {
    try {
      const { name, email } = job.data;
     //  Worker.cancelAllJobs();
     console.log(`Sending email to ${name} at ${email}`);
  //emailQueue.cancelAllJobs(); 
  //Email Notification user     
     //const name = "manjesh";    
       let htmTemplate = fs.readFileSync(path.join(__dirname, './views/components/email.html')).toString();
       htmTemplate = htmTemplate.replace("##name", name);
       htmTemplate = htmTemplate.replace("##company", "Marvel")
       const subject = 'Congratulations New Lead Details';
      // const email="manjeshphp100@gmail.com";
      await mailClass(email, htmTemplate, subject);
       //Email Notification user  
  // Here, you can integrate actual email sending logic (e.g., nodemailer)
  return Promise.resolve();      
    } catch (error) {
      console.log(error); 
    } 
});

emailQueue.on('completed', (job) => {  
  logger.info("Job completed with id",`${job.id}`);    
  console.log(`Job completed with id ${job.id}`);
});

emailQueue.on('failed', (job, err) => {
  console.log(`Job failed with id ${job.id}`, err);  
  logger.error(err);    
});

 