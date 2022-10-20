import userService from '@/services/users-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function usersPost(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userService.createUser({ email, password });
  res.status(httpStatus.CREATED).json({
    id: user.id,
    email: user.email,
  });
}
