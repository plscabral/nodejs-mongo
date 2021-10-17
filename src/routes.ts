import { Router } from 'express';

// Exporting controllers
import { UserController } from './controllers/UserController';

// Instantiating controllers
const userController = new UserController();

const routes = Router();

routes.post('/register', userController.register);

export { routes };