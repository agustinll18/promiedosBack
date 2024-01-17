/* MONGOOSE */
const mongoose = require("mongoose");
require("dotenv").config();
const linkConnect = process.env.MONGO_DB_URI; /* SE PUEDE HACER ASI Y PONER EL .ENV EN EL GIT IGNORE */
/*  O SE PUEDE HACER ASI CON EL LINK DE MONGO*/ /* en la ultima parte de la url crea la coleccion a la cual va a guardar los datos  */

mongoose
  .connect(linkConnect) /* devuelve una promesa */
  .then(() => {
    console.log(" Database connected ");
  })
  .catch((err) => {
    console.error(err);/* 
    mongoose.connection.close(); */
  });
/* CERRAR CONEXION EN CASO DE ERROR */
/* process.on ("uncaughtException", ()=> (
  mongoose.connection.disconnect()
  )) */

/* ESTO ES PARA AGREGAR UN PRODUCTO */


/* ESTO ES PARA BUSCAR PRODUCTOS EN LA BASE */
/*
postsProd     
  .find({}) ACA SE COLOCA EL VALOR QUE QUERES BUSCAR PARA HALLAR EL PRODUCTO, SINO TIENE NINGUN VALOR VA A RETORNAR TODOS LOS OBJETOS DE ESA COLECCION  

  .then((res) => {
    console.log(res);
  }); */
