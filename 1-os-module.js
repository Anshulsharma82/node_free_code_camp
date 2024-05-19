const { log } = require('console')
const os = require('os')

// userInfo

const userInfo = os.userInfo()
console.log(userInfo)

// upTime
console.log(os.uptime());

const systemInfo = {
    type: os.type(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem(),
    relase: os.release()
}

console.log(systemInfo)