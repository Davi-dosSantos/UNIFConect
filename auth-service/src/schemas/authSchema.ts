import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

// Schema para criação de um novo usuário
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

// Schema para a resposta (sem a senha)
const userResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

// Schema para login
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Schema para a resposta do login
const loginResponseSchema = z.object({
  token: z.string(),
});

// Tipos inferidos para uso no controller (isso continua igual e é ótimo!)
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;


// Gera os schemas JSON para o Fastify e a função $ref para referenciá-los
export const { schemas: authSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  userResponseSchema,
  loginSchema,
  loginResponseSchema,
}, { $id: 'AuthSchema' });