import fastify from 'fastify';
import fjwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { userRoutes } from './routes/user.routes'; 
import { userSchemas } from './schemas/user.schema'; 

const app = fastify({ logger: true });

async function start() {
  console.log(`[UserService] Usando JWT_SECRET: [${process.env.JWT_SECRET}]`);
  for (const schema of userSchemas) { 
    app.addSchema(schema);
  }

  app.register(fjwt, { secret: process.env.JWT_SECRET as string });

  app.register(swagger, {
    openapi: {
      info: {
        title: 'UNIFConect User Service', 
        version: '1.0.0',
      },
      components: { securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer' } } },
    },
  });
  app.register(swaggerUi, { routePrefix: '/docs' });

  app.register(userRoutes, { prefix: '/users' }); 

  try {
    await app.ready();
    app.swagger();
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`🚀 User Service rodando e documentação disponível em http://localhost:3002/docs`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
start();