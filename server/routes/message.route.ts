import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async function messageRoutes(app: FastifyInstance) {
  app.get('/messages', async () => {
    return prisma.message.findMany({ include: { sender: true, receiver: true } });
  });

  app.get('/messages/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.message.findUnique({ where: { id }, include: { sender: true, receiver: true } });
  });

  app.post('/messages', async (request) => {
    const data = request.body as any;
    return prisma.message.create({ data });
  });

  app.delete('/messages/:id', async (request) => {
    const { id } = request.params as { id: string };
    return prisma.message.delete({ where: { id } });
  });
}