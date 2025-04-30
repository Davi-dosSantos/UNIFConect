import { FastifyInstance } from 'fastify'

export async function offerRoutes(app: FastifyInstance) {
  app.get('/offers', {
    schema: {
      tags: ['offers'],
      summary: 'Listar ofertas',
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              description: { type: 'string' },
              userId: { type: 'string' },
              price: { type: 'number' }
            }
          }
        }
      }
    }
  }, async () => {
    return [{ id: '1', description: 'Ajuda em cálculo', userId: '1', price: 50 }]
  })
}