const { readFileSync, writeFileSync } = require('fs')

const fileData = readFileSync('./content/subFolder/test.txt','utf-8')
console.log(fileData)


// flag 'a' - if we want to append data in the file. If we didn't use this then data will be overwrite.
writeFileSync('./content/first.txt',' This is first text txt file.', {flag: 'a'})