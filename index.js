import express from 'express'
import cors from "cors"
import morgan from 'morgan';
import 'dotenv/config'; //permite procesar variables de entorno
import path from "path"
import { fileURLToPath } from 'url';
import routerProductos from './src/routes/productos.routes.js';
import './src/database/database.js'

//1° Configurar un puerto
const app = express();

app.set("port", process.env.PORT || 4000); //setear un puerto a la aplicación
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto "+ app.get("port"));
})  //queda escuchando el puerto



//2° Configurar middlewares (Funciones que se ejecuta antes de llegar a las rutas) "npm i cors morgan dotenv"

app.use(cors()); //permite aceptar conexiones remotas (tiene definidas las funciones para recibir get post put delete a las distintas rutas)
app.use(morgan("dev")) //nos da información en la terminal
app.use(express.json()) //permite interpretar el formato json
app.use(express.urlencoded({extended:true})) //me permite interpretar los datos de el body de un request

const __filename = fileURLToPath(import.meta.url) //obtener direccion del archivo actual (index.js)
const __dirname =path.dirname(__filename); //obtener direccion del directorio local (dónde está index)
const __publicname = path.join(__dirname, 'public') //agregar la carpeta public a el string del directorio

app.use(express.static(__publicname)) //se carga en la raíz del servidor (ruta principal), sirve para mostrar el index.html cuando se suba el proyecto a un serv de prod



//3° Configuracion de las rutas 

app.use("/api", routerProductos)