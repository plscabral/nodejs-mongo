import { Request, Response } from 'express';
import { User } from '../models/User';

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);

      return res.send(user);
    }
    catch (err) {
      return res.status(400).send({ error: 'Registration failed'});
    }
  }
}