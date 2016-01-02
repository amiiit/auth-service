import express from 'express'
import bodyParser from 'body-parser'
import Delivery from 'auth/delivery'
import Repository from 'auth/repository'
import logger from 'winston'

export default class AuthService {

    constructor(options) {
        this.app = express()
        this.delivery = new Delivery(options.email)
        this.repository = new Repository({ dbUrl: options.dbUrl })
    }

    init() {

        const app = this.app

        app.use(bodyParser.urlencoded({extended: false}))
        //app.use(bodyParser.json())

        app.post('/signup', function (req, res) {
            console.log('::::signup request', req.body)
            res.sendStatus(200)
        });

        app.get('/hello', function(req, res){
            res.send('hello world');
        })

        logger.info('Application started and listening')
        app.listen(3000)
    }

}
