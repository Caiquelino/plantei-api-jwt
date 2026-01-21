import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller.js";

const router = Router();

router.post("/usuarios", UsuarioController.store);
router.get("/usuarios/:id", UsuarioController.show);
router.put("/usuarios/:id", UsuarioController.update);

export default router;
