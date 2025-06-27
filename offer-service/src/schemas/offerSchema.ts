import { z } from 'zod';
import { buildJsonSchemas } from 'fastify';

const createOfferSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().optional(),
  subjectId: z.string().uuid(),
});

const offerResponseSchema = createOfferSchema.extend({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  createdAt: z.date(),
});

export type CreateOfferInput = z.infer<typeof createOfferSchema>;

export const { schemas: offerSchemas, $ref } = buildJsonSchemas({
  createOfferSchema,
  offerResponseSchema,
}, { $id: 'OfferSchema' });