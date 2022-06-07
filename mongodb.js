/* MONGOOSE */
const mongoose = require("mongoose");
/* SCHEMA */
const { model, Schema } = mongoose;

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
/* 
const newSchema = new Schema({
  modelo: String,
  descripcion: String,
  stock: Number,
  precio: Number,
  pic: String,
  peso: Number,
  aro: Number,
  patronEncordado: String,
  grip: String,
  balance: Number,
  largo: Number,
});
const postsProd = model("Product", newSchema); */


/* ESTO ES PARA AGREGAR UN PRODUCTO */

/* const product = new postsProd({                                        
  modelo: "Babolat Pure Aero Rafa",
  descripcion:
    "Combatividad, resistencia, fortaleza mental... ¡eres como Rafa! Es hora de desafiar a tus oponentes más duros con esta Pure Aero, que con su nombre y colores acompañará tu dominio del juego a través de tu liftado y tu potencia.",
  stock: 75,
  precio: 59000,
  pic: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/338/510/products/raqueta-babolat-pure-aero-rafa-2-bff1f4ef7c1210fb3b16334515103466-240-0.png",
  peso: 300,
  aro: 100,
  patronEncordado: "16/19",
  grip: "4 3/4 4 1/4",
  balance: 320,
  largo: 685,
}); */

/* ESTO ES PARA GUARDAR UN PRODUCTO EN MONGO */

/* product
  .save()
  .then((res) => {
    console.log(res);
    mongoose.connection.close(); 
  })
  .catch((err) => {
    console.error(err);
  }); */

/* ESTO ES PARA BUSCAR PRODUCTOS EN LA BASE */
/*
postsProd     
  .find({}) ACA SE COLOCA EL VALOR QUE QUERES BUSCAR PARA HALLAR EL PRODUCTO, SINO TIENE NINGUN VALOR VA A RETORNAR TODOS LOS OBJETOS DE ESA COLECCION  

  .then((res) => {
    console.log(res);
  }); */
