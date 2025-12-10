  //mail start
    const nodemailer = require("nodemailer");  
    // async..await is not allowed in global scope, must use a wrapper
    async function main(em, temp, sb) {
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport    
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "manjeshphp@gmail.com",
            pass: "aqmi cxck lhhn gkig"
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'manjeshphp@gmail.com', // sender address
       // to: "manjeshphp@gmail.com", // list of receivers
         to: em, //
        subject: sb, // Subject line
        text: "Hello world?", // plain text body
        //html: "<b>Sent from NodeJS</b>", // html body
        html: temp
    }); 
    //console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
     
    // Preview only available when sending through an Ethereal account
   // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

 
    }
   //return console.log(__dirname); 
//return console.log(datapath.toString());
//main().catch(console.error);
//Mail end 
module.exports = main;
