import type {Request, Response} from 'express';
import PrismaRepository from '../../db/prisma-repository';

export async function GetUserProfileUseCase(req: Request, res: Response) {
  const db = PrismaRepository.getInstance();

  if (!req.user) {
    throw new Error('Internal server error');
  }

  const userFound = await db.user.findUnique({
    where: {firebaseId: req.user.uid},
    include: {
      profile: {
        include: {
          friends: true,
          posts: true,
        },
      },
    },
  });

  if (!userFound || !userFound.profile) {
    throw new Error('User not found');
  }

  return res.status(200).json({profile: userFound.profile});
}
