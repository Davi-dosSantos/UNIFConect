import { FastifyRequest, FastifyReply } from 'fastify';
import { hash, compare } from 'bcryptjs';
import { prisma } from '../lib/prisma';
import { CreateUserInput, LoginInput } from '../schemas/authSchema';

export async function registerUser(req: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
  const { name, email, password } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return reply.status(409).send({ message: 'Email já cadastrado.' });
  
  const passwordHash = await hash(password, 8);
  const user = await prisma.user.create({ data: { name, email, password: passwordHash } });
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userResult } = user;
  return reply.status(201).send(userResult);
}

export async function login(req: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await compare(password, user.password))) {
    return reply.status(401).send({ message: 'Email ou senha inválidos.' });
  }

  const token = await reply.jwtSign({ id: user.id, name: user.name });
  return reply.send({ token });
}

export async function getMe(req: FastifyRequest, reply: FastifyReply) {
  // O hook de autenticação já validou o token e anexou `user` ao `req`
  return reply.send(req.user);
}