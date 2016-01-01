let instance

export default class TestUtils {

    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }

    static getInstance(){
        return instance
    }
}