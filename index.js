const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

<<<<<<< HEAD
app.get('/servicios',(req,res)=>{
    res.sendFile('./static/servicios.html',{
=======
app.get('/contacto',(req,res)=>{
    res.sendFile('./static/contacto.html',{
>>>>>>> 2561d85d778068cfa26687a7aaa254d92b724f0e
        root: __dirname
    })
})

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina.....!!!!')
    //res.end('no se encontro')
})


app.listen(3000)
console.log(`Server on port ${3000}`)