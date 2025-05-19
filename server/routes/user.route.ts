import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function userRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    return prisma.user.findMany();
  });

  app.get('/users/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.user.findUnique({ where: { id } });
  });

  app.post('/users', async (request) => {
    const data = request.body as any;
    return prisma.user.create({ data });
  });

  app.put('/users/:id', async (request) => {
    const { id } = request.params as { id: string };
    const data = request.body as any;
    return prisma.user.update({ where: { id }, data });
  });

  app.delete('/users/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.user.delete({ where: { id } });
  });
}