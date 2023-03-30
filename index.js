const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.sendFile('./templates/index.html', {
        root: __dirname
    })
})
app.get('/about',(req,res) => {
    res.sendFile('./templates/about.html', {
        root: __dirname
    })
})
app.get('/contact',(req,res) => {
    res.sendFile('./templates/contact.html', {
        root: __dirname
    })
})

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina.....!!!!')
    //res.end('no se encontro')
})


app.listen(3000)
console.log(`Server on port ${3000}`)