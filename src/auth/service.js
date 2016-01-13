import express from 'express'
import bodyParser from 'body-parser'
import Delivery from 'auth/delivery'
import Repository from 'auth/repository'
import logger from 'winston'
import validator from 'validator'
import Rx from 'rx'

export default class AuthService {

    constructor(options) {
        this.app = express()


        this.repository = new Repository(options.dbUrl)

        let newUserSubject = new Rx.Subject()
        this.repository.setObservable(newUserSubject)

        this.delivery = new Delivery(options.email)
        this.delivery.setObserver(newUserSubject)
    }

    init() {
        return this.repository.init().then(()=> {
            this.setRoutes()
        })
    }

    setRoutes() {
        const app = this.app
        const service = this

        app.use(bodyParser.urlencoded({extended: false}))
        //app.use(bodyParser.json())

        app.post('/signup', function (req, res) {

            if (!req.body.email) {
                res.status(400).send({error: 'Missing email field'}).end()
                return
            }

            if (!validator.isEmail(req.body.email)) {
                res.status(400).send({error: 'Illegal email'}).end()
                return
            }

            service.repository.newSignup(req.body.email).then(
                function (result) {
                    res.send({status: 'Signed up successfully. Confirmation email follows.'}).end()
                    service.delivery.sendSignupConfirmation(req.body.email)
                },
                function (err) {
                    if (err == 'already-exists') {
                        res.status(400).send({error: 'Email already exists'}).end()
                    } else {
                        logger.error(err)
                        res.status(500).send({error: 'Server error'}).end()
                    }
                }
            )

        });

        app.get('/hello', function (req, res) {
            res.send('hello world');
        })

        logger.info('Application started and listening')
        app.listen(3000)

    }


}
