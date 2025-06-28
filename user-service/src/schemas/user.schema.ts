import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const profileCore = {
  bio: z.string().optional(),
  course: z.string().optional(),
  institution: z.string().optional(),
  avatarUrl: z.string().url().optional(),
};

const updateProfileSchema = z.object({
  ...profileCore,
  interestTagIds: z.array(z.string().uuid()).optional(),
});

const profileResponseSchema = z.object({
  id: z.string(),
  userId: z.string(),
  ...profileCore,
  interests: z.array(z.object({
    tagId: z.string()
  })).optional()
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  updateProfileSchema,
  profileResponseSchema,
}, { $id: 'UserSchema' });