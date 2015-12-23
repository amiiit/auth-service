import express from 'express'
import bodyParser from 'body-parser'

export default class AuthService {

    constructor(options) {
        this.app = express()
        this.db = mongoose.connect(options.dbUrl);
    }

    init() {

        const app = this.app

        app.use(bodyParser.urlencoded({extended: false}))
        //app.use(bodyParser.json())

        app.post('/signup', function (req, res) {

        });

        app.listen(3000)
    }

}