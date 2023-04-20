import {Request, Response} from 'express';
import PrismaRepository from '../db/prisma-repository';

export async function UserController(req: Request, res: Response) {
  const db = PrismaRepository.getInstance();

  const users = await db.user.findMany();

  return res.status(200).json(users);
}
