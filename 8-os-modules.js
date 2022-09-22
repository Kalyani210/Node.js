const os = require('os')

// info about current user
const user = os.userInfo()


//method returns the systems the systems uptime in seconds

console.loh("The system Uptime is ${os.uptime()} seconds")

const currentOS ={
    name : os.type(),
    release : os.release(),
    freeMen : os.freemem()
}
console.log(currentOS)