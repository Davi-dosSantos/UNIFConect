import { FastifyInstance } from 'fastify'

export async function userRoutes(app: FastifyInstance) {
  app.get('/users', {
    schema: {
      tags: ['users'],
      summary: 'Listar usuários',
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' }
            }
          }
        }
      }
    }
  }, async () => {
    return [{ id: '1', name: 'João', email: 'joao@example.com' }]
  })
}