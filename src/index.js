import AuthService from 'auth/service'
import parseArgs from 'minimist'

(()=> {

    let argv = parseArgs(process.argv)
    let allFlagsProvided = true

    for (let key of ['db','smtp','smtp-user','smtp-password']){
      allFlagsProvided &= (argv[key] != undefined)
    }

    if (!allFlagsProvided){
      console.log('Usage: node auth-service.js --db <mongo_ip> --smtp <smtp> --smtp-user <smtp-user> --smtp-password <smtp-password>', argv);
    }

    new AuthService({
      dbIp: argv.db,
      email: {
        smtp: argv.smtp,
        user: argv['smtp-user'],
        password: argv['smtp-password']
      }
    }).init()
})();
