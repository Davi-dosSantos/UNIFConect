import { FastifyInstance } from 'fastify';
import { authenticate } from '../lib/auth.hook';
import { getUserProfile, upsertUserProfile } from '../controllers/user.controller';
import { $ref } from '../schemas/user.schema';

export async function userRoutes(app: FastifyInstance) {
  // Rota pública para ver o perfil de qualquer usuário
  app.get('/:userId/profile', getUserProfile);

  // Rota protegida para um usuário criar/atualizar seu próprio perfil
  app.put(
    '/profile',
    {
      onRequest: [authenticate], // <-- Rota protegida!
      schema: {
        body: $ref('updateProfileSchema'),
        response: { 200: $ref('profileResponseSchema') },
      },
    },
    upsertUserProfile
  );
}