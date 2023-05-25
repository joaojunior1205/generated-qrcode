require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('/src/public'))
app.use('/css', express.static(__dirname + '/src/public/css'))
app.use('/js', express.static(__dirname + '/src/publi/js'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/view/index.html');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
