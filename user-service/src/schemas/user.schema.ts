import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const profileCore = {
  course: z.string().optional(),
  institution: z.string().optional(),
  avatarUrl: z.string().url().optional(),
};

const updateProfileSchema = z.object({
  ...profileCore,
});

const profileResponseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  ...profileCore,
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  updateProfileSchema,
  profileResponseSchema,
}, { $id: 'UserSchema' });