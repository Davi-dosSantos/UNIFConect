import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function eventParticipantRoutes(app: FastifyInstance) {
  app.get('/event-participants', async () => {
    return prisma.eventParticipant.findMany();
  });

  app.post('/event-participants', async (request) => {
    const data = request.body as { eventId: string; userId: string };
    return prisma.eventParticipant.create({ data });
  });

  app.delete('/event-participants/:event_id/:user_id', async (request) => {
    const { event_id, user_id } = request.params as { event_id: string, user_id: string };
    return prisma.eventParticipant.delete({
      where: {
        eventId_userId: {
          eventId: event_id,
          userId: user_id,
        },
      },
    });
  });
}
