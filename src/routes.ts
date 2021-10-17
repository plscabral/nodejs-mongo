import { Router } from 'express';

// Exporting controllers
import { AuthController } from './controllers/authController';

// Instantiating controllers
const authController = new AuthController();

const routes = Router();

routes.get('/register', authController.register);

export { routes };