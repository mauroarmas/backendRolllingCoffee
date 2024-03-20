import Producto from "../database/models/producto.js";


export const listarProductos = (req, res) => {
  console.log("Hola mundo desde el controlador");
  res.send("listando productos");
};
export const agregarProducto = async (req, res) => {
  try {
    //extraer datos del body:
    console.log(req.body);

    //todo: validar los datos antes de crear

    //crear producto nuevo
    const nuevoProducto = new Producto(req.body)

    //pedirle a la DB que guarde el producto nuevo
    const producto_a_guardar = await nuevoProducto.save();

    //enviar la respuesta al frontend
    res.status(201).json({
      producto: producto_a_guardar,
      mensaje: "El producto fue guardado correctamente"
    });
    
    
  } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: "El producto no tiene el formato adecuado (bad request)"
    });
  }
};