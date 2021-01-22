const mailer = require("nodemailer");

const getEmailData = (to, name, template,password) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "Live20 <live20.appricots@gmail.com>",
                to,
                subject: `Hello ${name} , Welcome to Live20 `,
                html:`<div style="margin-left:1em ; background-color: #21292f; padding: 1em; color: rgb(253, 247, 247); font: 1em sans-serif; ">
                <h3>Your Live20 Account details</h1>
                <hr>
                <h4>your username :${to}</h4>
                <h4>your password :${password}</h4>
                <h4>Contect Number : 8122490546</h4>
                <button
                style="background-image: linear-gradient(260deg,#014e0c 0%, #1d0266 100% );border: none;padding: 0.1em;color: rgb(253, 247, 247);">
               <a style="text-decoration: none; font: 2em sans-serif;font-weight: 100%; color: rgb(253, 247, 247);" href="https://live20.in/">Click me to Login and Make a fun with Us </a>
           </button>
              </div>
             `
            }
            break;

        case "reset":
            data = {
                from: "Live20 <live20.appricots@gmail.com>",
                to,
                subject: `Hello , Your Password Reset Successfully` ,
                html:`<div style="margin-left:1em ; background-color: #21292f; padding: 1em; color: rgb(253, 247, 247); font: 1em sans-serif; ">
                <h3>Your Live20 Account details</h1>
                <hr>
                <h4>your username :${to}</h4>
                <h4>your update password :${password}</h4>
                <h4>Contect Number : 8122490546</h4>
                <button
                style="background-image: linear-gradient(260deg,#014e0c 0%, #1d0266 100% );border: none;padding: 0.1em;color: rgb(253, 247, 247);">
               <a style="text-decoration: none; font: 2em sans-serif;font-weight: 100%; color: rgb(253, 247, 247);" href="https://live20.in/">Click me to Login and Make a fun with Us </a>
           </button>
              </div>
             `
            }
            break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, type,password) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "live20.appricots@gmail.com",
            pass: "Admin@123"
        }
    })

    const mail = getEmailData(to, name, type,password)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }