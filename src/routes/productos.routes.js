import { Router } from "express";
import { listarProductos, agregarProducto, listarProductoPorId, listarProductosPorInfusion, editarProductoPorId } from "../controllers/productos.controllers.js";

const router = Router();
router.route("/productos").get(listarProductos).post(agregarProducto)
router.route("/productos/:id").get(listarProductoPorId)
router.route("/productos/editar/:id").put(editarProductoPorId)
router.route("/productos/categoria/infusion").get(listarProductosPorInfusion)

export default router;