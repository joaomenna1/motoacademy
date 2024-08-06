const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send({ message : "olaaaa!!!"})
})

server.listen(3333)