import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function eventRoutes(app: FastifyInstance) {
  app.get('/events', async () => {
    return prisma.event.findMany({ include: { organizer: true, subject: true } });
  });

  app.get('/events/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.event.findUnique({ where: { id }, include: { organizer: true, subject: true } });
  });

  app.post('/events', async (request) => {
    const data = request.body as any;
    return prisma.event.create({ data });
  });

  app.put('/events/:id', async (request) => {
    const { id } = request.params as { id: string };
    const data = request.body as any;
    return prisma.event.update({ where: { id }, data });
  });

  app.delete('/events/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.event.delete({ where: { id } });
  });
}