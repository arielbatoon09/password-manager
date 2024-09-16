// src/schemas/userSchema.ts
import { z } from 'zod';
import { emailSchema, nameSchema, passwordSchema } from './sharedSchemas';

export const createUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const updateUserSchema = z.object({
  name: nameSchema.optional(),
  email: emailSchema.optional(),
  password: passwordSchema.optional(),
});