import mongodb from 'mongodb'

export default class Registry {

    constructor(db){
        this.db = db
    }

    isEmailTaken(email){
        this.db.collection('user').find({
            email: email
        })
    }

}