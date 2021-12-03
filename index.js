const express = require('express')
const app = express()
const port = 9000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.sendFile('index.html', { root: __dirname })  
})

app.listen(port, () => {
    console.log(`this might be working? it is! this is running on port ${port}`)
})