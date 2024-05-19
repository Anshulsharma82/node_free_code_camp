const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to Home Page')
        res.end()
    }
    else if (req.url === '/about') {
        res.write('Welcome to About Page')
        res.end()
    }
    res.write(`
        <h1>Oops!</h1>
        <p>The Page you are looking for doesn't exist</p>
        <a href="/">Home Page </a>
    `)
    res.end()

})

server.listen(5000)