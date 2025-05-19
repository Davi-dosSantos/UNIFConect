import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function offerRoutes(app: FastifyInstance) {
  app.get('/offers', async () => {
    return prisma.offer.findMany({ include: { subject: true, user: true } });
  });

  app.get('/offers/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.offer.findUnique({ where: { id }, include: { subject: true, user: true } });
  });

  app.post('/offers', async (request) => {
    const data = request.body as any;
    return prisma.offer.create({ data });
  });

  app.put('/offers/:id', async (request) => {
    const { id } = request.params as { id: string };
    const data = request.body as any;
    return prisma.offer.update({ where: { id }, data });
  });

  app.delete('/offers/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.offer.delete({ where: { id } });
  });
}