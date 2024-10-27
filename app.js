const express = require('express');//modulo express
const path = require('path');//camino --- rutas
const app = express();//instancia de express
const port = 4000;//port

app.use(express.static(path.join(__dirname,'/static')));//ruta archivos estaticos 

app.set('view engine','ejs');//motor EJS

app.set('views',path.join(__dirname,'/views'));//ruta de las vistas
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});

app.get('/',(req,res)=>{ //-----------endPoint----------------
	try{//esto sirve para intentar ejecutar codigo o instrucciones de codigo
    res.render('index');
	}catch(error){//esto sirve para atrapar el error en caso de que ocurra uno
     console.error(error.message);
     res.status(500).send('Error en el servidor');
	 }
});

app.listen(port,()=>{
 console.log(`ruta completa del servidor : ${__dirname}`);
 console.log(`Servidor corriendo en el puerto : ${port}`);	
});

