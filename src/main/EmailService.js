const nodemailer = require("nodemailer");
const transporter = {
  sendMail: (mailOptions, callback) => {
    console.log("########sending email##########");
    console.log("email from:" + from);
    console.log("email to:" + to);
    console.log("email subject:" + subject);
    console.log("email text:" + text);
    callback(null, {response: true});
  }
};

class EmailService {

  constructor({transport:{service, auth: {user,pass}}} ){
    this.transport = transport;
  }

  send({from, to, subject, text}) {
    //var transporter = nodemailer.createTransport(this.transport);

    var mailOptions = {from, to, subject, text};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}
