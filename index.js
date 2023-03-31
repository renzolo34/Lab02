const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/nosotros',(req,res)=>{
    res.sendFile('./static/nosotros.html',{
        root: __dirname
    })
})

app.get('/servicios',(req,res)=>{
    res.sendFile('./static/servicios.html',{
        root: __dirname
    })
})

app.get('/contacto',(req,res)=>{
    res.sendFile('./static/contacto.html',{
        root: __dirname
    })
})

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina.....!!!!')
    //res.end('no se encontro')
})


app.listen(3000)
console.log(`Server on port ${3000}`)