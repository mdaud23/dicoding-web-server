'use strict'

const express = require('express')

const PORT = 8000
const HOST = '192.168.43.36'

const app = express()
app.get('/', (req, res) => {
    res.send('Muhammad Daud!\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
