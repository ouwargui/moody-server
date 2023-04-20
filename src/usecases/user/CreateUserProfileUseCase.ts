import {Request, Response} from 'express';
import PrismaRepository from '../../db/prisma-repository';
import {z} from 'zod';
import {zParse} from '../../helpers/body-validator';
import {Profile} from '@prisma/client';

const schema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at leat 3 characters long')
    .max(20, 'Username must be at most 20 characters long'),
  picture: z.string().url('Picture must be a valid URL'),
});

export async function CreateUserProfileUseCase(req: Request, res: Response) {
  const db = PrismaRepository.getInstance();

  if (!req.user) {
    throw new Error('Internal server error');
  }

  const userFound = await db.user.findUnique({
    where: {firebaseId: req.user.uid},
  });

  if (!userFound) {
    throw new Error('User not found');
  }

  const {username, picture} = await zParse(schema, req);

  const profile: Omit<Profile, 'id' | 'createdAt' | 'updatedAt'> = {
    username,
    picture,
    userId: userFound.id,
  };

  const profileCreated = await db.profile.create({
    data: profile,
    include: {
      friends: true,
      posts: true,
    },
  });

  return res.status(201).json({profile: profileCreated});
}
