import Fastify from 'fastify'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import { userRoutes } from './routes/user.route'
import { offerRoutes } from './routes/offer.route'

export const app = Fastify()

app.register(swagger, {
  swagger: {
    info: {
      title: 'UNIFConect API',
      description: 'Documentação da API do UNIFConect',
      version: '1.0.0'
    },
    tags: [
      { name: 'users' },
      { name: 'offers' }
    ]
  }
})

app.get('/', async (request, reply) => {
  return { message: 'API UNIFConect está online 🚀' };
});


app.register(swaggerUI, {
  routePrefix: '/docs'
})

app.register(userRoutes)
app.register(offerRoutes)