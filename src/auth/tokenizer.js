import Utils from 'auth/utils'

const DayInSeconds = 60 * 60 * 24

export default class Tokenizer {

    constructor(options) {
        this.repository = options.repository
    }


    tokenizeNewUser(email) {
        return this.repository.setLoginToken(email, Utils.randomToken(), 7 * DayInSeconds)
    }

    setSubject(subject) {
        this.subject = subject

        this.subject.subscribe(
            event => {
                if (event.type == 'new-user') {

                    this.tokenizeNewUser(event.data.email).then(()=> {
                        this.subject.onNext({type: 'login-token-set'})
                    })
                    //generate token

                    //emit event on new token

                }
            },
            e => console.log('onError: ' + e.message),
            () => console.log('onCompleted'))
    }

}
