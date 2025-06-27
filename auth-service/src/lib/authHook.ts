import { FastifyRequest, FastifyReply } from 'fastify';

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  try {
    await req.jwtVerify();
  } catch (err) {
    reply.status(401).send({ message: 'Autenticação necessária', error: err });
  }
}