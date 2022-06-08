/* MONGOOSE */
const mongoose = require("mongoose");

const linkConnect =
  "mongodb+srv://agusll18:Headtenis1@cluster0.w1y4a.mongodb.net/apiMP"; /* en la ultima parte de la url crea la coleccion a la cual va a guardar los datos  */

mongoose
  .connect(linkConnect) /* devuelve una promesa */
  .then(() => {
    console.log(" Database connected ");
  })
  .catch((err) => {
    console.error(err);
  });


/* ESTO ES PARA AGREGAR UN PRODUCTO */


/* ESTO ES PARA BUSCAR PRODUCTOS EN LA BASE */
/*
postsProd     
  .find({}) ACA SE COLOCA EL VALOR QUE QUERES BUSCAR PARA HALLAR EL PRODUCTO, SINO TIENE NINGUN VALOR VA A RETORNAR TODOS LOS OBJETOS DE ESA COLECCION  

  .then((res) => {
    console.log(res);
  }); */
