import { Router } from 'express';
import produtoRoutes from './produto.routes.js';
import contatoRoutes from './contato.routes.js';
import healthRoutes from './health.routes.js'; 
import usuarioRoutes from "./usuario.routes.js";
import authRoutes from './auth.routes.js';

//import authRoutes from './auth.routes.js';

const router = Router();

router.use('/', healthRoutes);          // Health check
router.use('/produtos', produtoRoutes);
router.use('/contatos', contatoRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/auth', authRoutes);

export default router;
