const express = require('express')
const app = express()
const port = 3000 // ou 80

app.get('/', (req, res) => {
    res.send('<h1>bonjour Lucas</h1>')
})

app.listen(port, () => {
    console.log('votre site est à jour sur le port 3000 !!');
})