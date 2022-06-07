const { model, Schema } = require("mongoose");
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
newSchema.set("toJSON", {
  transform: (docunent, resProducto) => {
    resProducto.id = resProducto._id;
    delete resProducto._id;
    delete resProducto.__v;
  },
});
const Prod = model("Product", newSchema);
module.exports = Prod;
