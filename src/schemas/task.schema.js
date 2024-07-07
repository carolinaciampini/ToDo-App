import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z.string({
    required_error: 'A title is required'
  }),
  description: z.string({
    required_error: 'Description must be a string'

  }),
  date: z.string().datetime().optional()
});