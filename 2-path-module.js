const path = require('path')

// path separator
console.log(path.sep)

// join the path
const pathName = path.join('/content/','/subFolder','/test.txt')
console.log(pathName)

// basename returns the file name

console.log(path.basename(pathName))

// resolve: It returns absolute path i.e. from starting (begin from root directory) to end
// If there is / anywhere in the resolve then it will consider it as a root.

const absolute = path.resolve('content','subFolder','test.txt')

console.log(absolute)