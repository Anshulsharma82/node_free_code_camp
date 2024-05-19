const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('error is:', err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/final.txt', first + ' ' + second, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log('Operation Completed Successfully!!')
        })
    })
})
