import { Router } from "express"; // Importa o módulo "Router" do Express, que permite definir rotas.
const authRouter = Router();// Cria uma instância do Router para definir as rotas.

//Classe de autentificação
import AuthController from "../controllers/auth.controller.js"; 
const auth = new AuthController();

// Funções de Autentificação
authRouter.post("/", auth.login);

export default authRouter;