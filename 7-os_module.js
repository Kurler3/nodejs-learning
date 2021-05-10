const os = require('os')

// info about current user

const user = os.userInfo()

// Method returns the system uptime in seconds

// console.log(`The system updatime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOS)