
//Codigo que NODEJS
/*const http = require('http');

http.createServer((req,res)=>{
    res.end('Hola mundo')nom 
}).listen(3000)
*/

//instaciar express
//rutas
const express = require('express');
const app = express();

app.get( '/' , (req,res) => {
    
    res.end("Hola mundo");
})


app.get('/usuario', (req,res)=>{
    res.end('Binevenido usuario')
})

app.get('*',(req,res)=>{
    res.end('No se encontro ninguna vista')
})

app.listen(3000 , ()=>{

    console.log("servidor activo");
});
