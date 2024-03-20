import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try{
    // *Buscar Productos
    const resultado = await Producto.find();

    // devolver los productos
    res.status(200).json(resultado)

  }catch(error){
    console.error(error)
    res.status(404).json({
      message : "No se pudo obtener los datos"
    })
  }
  console.log("Hola mundo desde el controlador");
  res.send("listando productos");
};

export const agregarProducto = async (req, res) => {
  try {
    //extraer datos del body:
    console.log(req.body);

    //todo: validar los datos antes de crear

    //crear producto nuevo
    const nuevoProducto = new Producto(req.body);

    //pedirle a la DB que guarde el producto nuevo
    const producto_a_guardar = await nuevoProducto.save();

    //enviar la respuesta al frontend
    res.status(201).json({
      producto: producto_a_guardar,
      mensaje: "El producto fue guardado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensage: "El producto no tiene el formato adecuado (bad request)",
    });
  }
};
