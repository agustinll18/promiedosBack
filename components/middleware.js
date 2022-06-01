const middelware = (request, response, next) => {     /* ESTO ES PARA QUE LEA LAS URL Y VEA CON CUAL MATCHEA Y EN CASO DE NO MATCHEAR PASA AL SIGUIENTE (DE ARRIBA HACIA ABAJO) CON LA FUNCION NEXT() */
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log("------")
  next()
}
module.exports = middelware