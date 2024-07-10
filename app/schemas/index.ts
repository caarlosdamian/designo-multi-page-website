import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(5, { message: 'Deben ser minimo 5' }),
});
