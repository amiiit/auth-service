import email from 'emailjs'

export default class Delivery {

  constructor(options){
    this.smtp = options.smtp

    this.server = email.server.connect({
       user:    "postmaster@stayover.anyoga.co",
       password:"authorize",
       host:    "smtp.mailgun.org",
       ssl:     true
    });
  }

  sendMail(to, subject, text){
    server.send({
       text:    text,
       from:    "you <postmaster@stayover.anyoga.co>",
       to:      to,
       subject: subject
    }, function(err, message) { console.log(err || message); });
  }

  sendSignupConfirmation(to){
    sendMail(to, 'Signup confirmation', 'Please confirm signup')
  }

}