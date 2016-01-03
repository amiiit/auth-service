import mongodb, {MongoClient, Server} from 'mongodb'

export default class Repository {

    constructor(dbUrl, options = {}) {
        this.dbUrl = dbUrl
        this.options = options
    }

    init() {
        let that = this
        return new Promise(function (accept, reject) {
            MongoClient.connect(that.dbUrl, function (err, db) {
                if (!err) {
                    that.db = db
                    accept()
                } else {
                    reject(err)
                }
            })
        })

    }

    isEmailExists(email) {
        return new Promise((accept, reject) => {
            this.db.collection('users').find({
                email: email
            }).count(function (err, count) {
                if (err) {
                    reject(err)
                } else if (count > 1) {
                    throw new Error(`found ${count} entries for email ${email}`)
                } else accept(count == 1)
            })
        })

    }

    newSignup(email) {
        return new Promise(function (accept, reject) {
            accept()
        })
    }

}
