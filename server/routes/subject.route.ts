// src/routes/subject.ts
import { FastifyInstance } from 'fastify'
import { PrismaClient, Subject } from '@prisma/client'

const prisma = new PrismaClient()

export async function subjectRoutes(app: FastifyInstance) {
  const subjectSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
    },
  }

  app.get('/subjects', {
    schema: {
      description: 'Lista todos os assuntos',
      tags: ['Subject'],
      response: {
        200: {
          type: 'array',
          items: subjectSchema,
        },
      },
    },
  }, async (_req, reply) => {
    const subjects = await prisma.subject.findMany()
    reply.send(subjects)
  })

  app.get('/subjects/:id', {
    schema: {
      description: 'Busca assunto por ID',
      tags: ['Subject'],
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id'],
      },
      response: {
        200: subjectSchema,
        404: { type: 'object', properties: { message: { type: 'string' } } },
      },
    },
  }, async (request, reply) => {
    const { id } = request.params as { id: string }
    const subject = await prisma.subject.findUnique({ where: { id } })
    if (!subject) return reply.status(404).send({ message: 'Subject not found' })
    reply.send(subject)
  })

  app.post('/subjects', {
    schema: {
      description: 'Cria um novo assunto',
      tags: ['Subject'],
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        },
      },
      response: {
        201: subjectSchema,
      },
    },
  }, async (request, reply) => {
    const { name } = request.body as { name: string };
  
    const subject = await prisma.subject.create({
      data: { name },
    });
  
    reply.status(201).send(subject);
  });
  

  app.put('/subjects/:id', {
    schema: {
      description: 'Atualiza assunto por ID',
      tags: ['Subject'],
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id'],
      },
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
      },
      response: {
        200: subjectSchema,
        404: { type: 'object', properties: { message: { type: 'string' } } },
      },
    },
  }, async (request, reply) => {
    const { id } = request.params as { id: string }
    const data = request.body as Partial<Subject>
    try {
      const updatedSubject = await prisma.subject.update({ where: { id }, data })
      reply.send(updatedSubject)
    } catch {
      reply.status(404).send({ message: 'Subject not found' })
    }
  })

  app.delete('/subjects/:id', {
    schema: {
      description: 'Deleta assunto por ID',
      tags: ['Subject'],
      params: {
        type: 'object',
        properties: { id: { type: 'string', format: 'uuid' } },
        required: ['id'],
      },
      response: {
        204: { type: 'null' },
        404: { type: 'object', properties: { message: { type: 'string' } } },
      },
    },
  }, async (request, reply) => {
    const { id } = request.params as { id: string }
    try {
      await prisma.subject.delete({ where: { id } })
      reply.status(204).send()
    } catch {
      reply.status(404).send({ message: 'Subject not found' })
    }
  })
}
