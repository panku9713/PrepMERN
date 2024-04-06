require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world !!')
})

app.listen(process.env.PORT, () => { console.log(`port is listening on ${process.env.POrt}`) })