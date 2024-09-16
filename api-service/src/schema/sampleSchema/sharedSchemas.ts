// src/schemas/sharedSchemas.ts
import { z } from 'zod';

// Shared email validation
export const emailSchema = z.string().email("Invalid email address");

// Shared name validation
export const nameSchema = z.string().min(1, "Name is required");

// Shared password validation
export const passwordSchema = z.string().min(6, "Password must be at least 6 characters long");
