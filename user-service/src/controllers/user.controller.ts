import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { UpdateProfileInput } from '../schemas/user.schema';

export async function getUserProfile(req: FastifyRequest<{ Params: { userId: string } }>, reply: FastifyReply) {
  const profile = await prisma.profile.findUnique({ where: { userId: req.params.userId } });
  if (!profile) {
    return reply.status(404).send({ message: 'Perfil não encontrado.' });
  }
  return profile;
}

export async function upsertUserProfile(req: FastifyRequest<{ Body: UpdateProfileInput }>, reply: FastifyReply) {
  const { id: userId } = req.user as { id: string }; // ID do usuário logado vindo do token JWT

  const profile = await prisma.profile.upsert({
    where: { userId },
    update: req.body,
    create: {
      userId,
      ...req.body,
    },
  });

  return reply.status(200).send(profile);
}