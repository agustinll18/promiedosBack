const { model, Schema } = require("mongoose");

const likeSchema = new Schema({
  username: String,
  date: { type: Date, default: Date.now },
}, { _id: false });

const newSchema = new Schema({
  content: String,
  username: String,
  date: { type: Date, default: Date.now },
  likes: [likeSchema], // Cambiado a un array de objetos
});

newSchema.set("toJSON", {
  transform: (document, resProducto) => {
    resProducto.id = resProducto._id;
    delete resProducto._id;
    delete resProducto.__v;
  },
});

const Posts = model("Post", newSchema);

module.exports = Posts;
