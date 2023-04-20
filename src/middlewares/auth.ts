import type {NextFunction, Request, Response} from 'express';
import {authApp} from '../config/firebase';

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new Error('Invalid token');
  }

  try {
    const decodedToken = await authApp.verifyIdToken(token);

    if (!decodedToken) {
      throw new Error('Invalid token');
    }

    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
}
