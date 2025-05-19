import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function matchRoutes(app: FastifyInstance) {
  app.get('/matches', async () => {
    return prisma.match.findMany();
  });

  app.get('/matches/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.match.findUnique({ where: { id } });
  });

  app.post('/matches', async (request) => {
    const data = request.body as any;
    return prisma.match.create({ data });
  });

  app.put('/matches/:id', async (request) => {
    const { id } = request.params as { id: string };
    const data = request.body as any;
    return prisma.match.update({ where: { id }, data });
  });

  app.delete('/matches/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.match.delete({ where: { id } });
  });
}