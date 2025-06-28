import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { UpdateProfileInput } from '../schemas/user.schema';

export async function getUserProfile(req: FastifyRequest<{ Params: { userId: string } }>, reply: FastifyReply) {
  const { userId } = req.params;

  // Ao buscar o perfil, incluímos os interesses associados
  const profile = await prisma.profile.findUnique({
    where: { userId },
    include: {
      interests: {
        select: {
          tagId: true,
        }
      }
    }
  });

  if (!profile) {
    return reply.status(404).send({ message: 'Perfil não encontrado.' });
  }
  return profile;
}

export async function upsertUserProfile(req: FastifyRequest<{ Body: UpdateProfileInput }>, reply: FastifyReply) {
  const { id: userId } = req.user as { id: string };
  const { interestTagIds, ...profileData } = req.body;

  try {
    // Usamos uma transação para garantir que ambas as operações (atualizar perfil e interesses)
    // funcionem ou falhem juntas.
    const result = await prisma.$transaction(async (tx) => {
      // 1. Cria ou atualiza os dados do perfil (bio, curso, etc.)
      const upsertedProfile = await tx.profile.upsert({
        where: { userId },
        update: profileData,
        create: {
          userId,
          ...profileData,
        },
      });

      // 2. Se uma lista de interesses foi enviada, atualize-os.
      if (interestTagIds) {
        // Primeiro, remove todos os interesses antigos para garantir uma lista limpa
        await tx.profileInterestTag.deleteMany({
          where: { profileId: upsertedProfile.id },
        });

        // Depois, insere os novos interesses
        if (interestTagIds.length > 0) {
          await tx.profileInterestTag.createMany({
            data: interestTagIds.map((tagId) => ({
              profileId: upsertedProfile.id,
              tagId: tagId,
            })),
          });
        }
      }

      // 3. Retorna o perfil completo com os novos interesses
      const finalProfile = await tx.profile.findUnique({
        where: { userId },
        include: {
          interests: {
            select: {
              tagId: true
            }
          }
        },
      });

      return finalProfile;
    });

    return reply.status(200).send(result);

  } catch (error) {
    console.error("Erro ao atualizar perfil e interesses:", error);
    return reply.status(500).send({ message: "Não foi possível atualizar o perfil." });
  }
}