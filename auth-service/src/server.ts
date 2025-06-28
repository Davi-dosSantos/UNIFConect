// auth-service/src/server.ts

import fastify from 'fastify';
import fjwt from '@fastify/jwt';
// Importações necessárias para o Swagger
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { authRoutes } from './routes/auth.routes';
import { authSchemas } from './schemas/auth.schema';

const app = fastify({ logger: true });

async function start() {
  for (const schema of authSchemas) {
    app.addSchema(schema);
  }

  app.register(fjwt, { secret: process.env.JWT_SECRET as string });
  
  // --- CONFIGURAÇÃO DO SWAGGER ---

  // 1. Registra o plugin principal do Swagger
  app.register(swagger, {
    openapi: {
      info: {
        title: 'UNIFConect Auth Service', 
        description: 'API para autenticação e gerenciamento de usuários base.',
        version: '1.0.0',
      },
      // Informa ao Swagger como a autenticação JWT (Bearer) funciona
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
        },
      },
    },
  });

  // 2. Registra o plugin que cria a interface web do Swagger
  app.register(swaggerUi, {
    routePrefix: '/docs', // Define a URL onde a documentação estará disponível
  });

  // --- FIM DA CONFIGURAÇÃO DO SWAGGER ---

  app.register(authRoutes, { prefix: '/auth' });

  try {
    await app.ready();
    app.swagger();
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`🚀 Auth Service rodando e documentação disponível em http://localhost:3001/docs`);

  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();