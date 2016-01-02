import express from 'express'
import bodyParser from 'body-parser'
import Delivery from 'auth/delivery'
import Repository from 'auth/repository'
import logger from 'winston'

export default class AuthService {

    constructor(options) {
        this.app = express()
        this.delivery = new Delivery(options.email)
        console.log('call me', options)
        this.repository = new Repository({ dbUrl: options.dbUrl })
    }

    init() {

        const app = this.app

        app.use(bodyParser.urlencoded({extended: false}))
        //app.use(bodyParser.json())

        app.post('/signup', function (req, res) {
            logger.debug('request', req.body)
            return true;
        });

        app.get('/hello', function(req, res){
            res.send('hello world');
        })

        logger.info('Application started and listening')
        app.listen(3000)
    }

}
