import { FastifyInstance } from 'fastify';
import { registerUser, login, getMe } from '../controllers/authController';
import { $ref } from '../schemas/authSchema';
import { authenticate } from '../lib/authHook';

export async function authRoutes(app: FastifyInstance) {
  // Rota para registrar um novo usuário
  app.post(
    '/register',
    {
      schema: {
        summary: 'Registra um novo usuário',
        description: 'Cria um novo usuário no sistema com nome, email e senha. O papel (role) é opcional.',
        tags: ['Autenticação'],
        body: $ref('createUserSchema'), // Valida o corpo da requisição
        response: {
          201: $ref('userResponseSchema'), // Define o formato da resposta de sucesso
        },
      },
    },
    registerUser // Função do controller que executa a lógica
  );

  // Rota para login de um usuário existente
  app.post(
    '/login',
    {
      schema: {
        summary: 'Realiza o login de um usuário',
        description: 'Autentica um usuário com email e senha e retorna um token JWT.',
        tags: ['Autenticação'],
        body: $ref('loginSchema'),
        response: {
          200: $ref('loginResponseSchema'),
        },
      },
    },
    login
  );

  // Rota protegida para buscar os dados do usuário logado
  app.get(
    '/me',
    {
      onRequest: [authenticate], // Hook de autenticação: esta rota exige um token JWT válido
      schema: {
        summary: 'Busca dados do usuário logado',
        description: 'Retorna as informações do usuário contidas no token JWT. Requer autenticação.',
        tags: ['Usuários'],
        security: [{ bearerAuth: [] }], // Informa ao Swagger que esta rota é protegida
        response: {
          200: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              role: { type: 'string' },
            },
          },
        },
      },
    },
    getMe
  );
}