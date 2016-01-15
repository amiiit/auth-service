import email from 'emailjs'

export default class Delivery {

    constructor(options) {
        this.sender = options.user
        this.smtp = options.smtp

        this.server = email.server.connect({
            user: "postmaster@stayover.anyoga.co",
            password: "authorize",
            host: "smtp.mailgun.org",
            ssl: true
        });
    }

    setObserver(observer) {
        this.observer = observer
        observer.subscribe(
            event => {
                if (event.type == 'new-email-token') {
                    this.sendMail(event.data.email, 'Welcome', 'Welcome user')
                }
            },
            e => console.log('onError: ' + e.message),
            () => console.log('onCompleted'))
    }


    sendMail(to, subject, text) {
        console.log('Sending email', to, subject)
        this.server.send({
            text: text,
            from: this.sender,
            to: to,
            subject: subject
        }, function (err, message) {
            console.log(err || message);
        });
    }

    sendSignupConfirmation(to) {
        sendMail(to, 'Signup confirmation', 'Please confirm signup')
    }

}
