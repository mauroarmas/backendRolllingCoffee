import { Router } from "express";
import { listarProductos, agregarProducto } from "../controllers/productos.controllers.js";

const router = Router();
router.route("/productos").get(listarProductos).post(agregarProducto)

export default router;