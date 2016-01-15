export default class Utils {

    static randomToken(length = 18) {
        crypto.randomBytes(length, (err, buf) => {
            if (err) throw err;
            console.log(buf.toString('hex'))
        });
    }

}