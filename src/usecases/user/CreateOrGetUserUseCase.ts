import {Request, Response} from 'express';
import PrismaRepository from '../../db/prisma-repository';

export async function CreateOrGetUserUseCase(req: Request, res: Response) {
  const db = PrismaRepository.getInstance();

  if (!req.user) {
    throw new Error('Internal server error');
  }

  const userFound = await db.user.findUnique({
    where: {firebaseId: req.user.uid},
    include: {
      profile: true,
    },
  });

  if (!userFound) {
    const userCreated = await db.user.create({
      data: {
        firebaseId: req.user.uid,
      },
      include: {
        profile: true,
      },
    });

    return res.status(201).json({user: userCreated});
  }

  return res.status(200).json({user: userFound});
}
