const express = require('express');
const cors = require('cors');
const app = express();
var errorHandler = require('express-async-error').Handler
app.use(errorHandler())
app.use(cors());
const port = 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
const mailClass = require('./src/util/emailer');  
//const connectionRedis = require("./src/config/config");
const sendEmailJob = require("./src/producer");  
const consumer = require("./src/workerEmail");
//Cancel JOb
//const cancelAllJobs = require('./src/config/cancelAllJob'); 
//cancelAllJobs();
 

// for(let i=1; i<=1; i++){
//   const name = `User_${i}`;
//   const email= "manjeshphp@gmail.com"
//   sendEmailJob(name,email);
// }


 
 
  // sendEmailJob("IT","manjeshphp@gmail.com");
 
 
  //Email Notification user     
      // const name = "manjesh";    
      //  let htmTemplate = fs.readFileSync(path.join(__dirname, './src/views/components/email.html')).toString();
      //  htmTemplate = htmTemplate.replace("##name", name);
      //  htmTemplate = htmTemplate.replace("##company", "Marvel")
      //  const subject = 'Congratulations New Lead Details';
      //  const email="manjeshphp100@gmail.com";
       
      //  (async ()=>{
      //      try {
      //          await mailClass(email, htmTemplate, subject);
      //          console.log("Email sent successfully");
      //       } catch (error) { console.log(error);} })
      //   ();
       
       //Email Notification user 

app.listen(port, ()=>{ console.log(`listening on port ${port}`)});
app.use(cors({ origin: "*", credentials: true }));







