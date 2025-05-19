import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function reviewRoutes(app: FastifyInstance) {
  app.get('/reviews', async () => {
    return prisma.review.findMany({ include: { reviewer: true, reviewee: true } });
  });

  app.get('/reviews/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.review.findUnique({ where: { id }, include: { reviewer: true, reviewee: true } });
  });

  app.post('/reviews', async (request) => {
    const data = request.body as any;
    return prisma.review.create({ data });
  });

  app.delete('/reviews/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.review.delete({ where: { id } });
  });
}