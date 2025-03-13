import {z} from 'zod';

// Zod Schema for Validation
const userValidationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    age: z.number().int().min(1, 'Age must be a positive integer')
});
export default userValidationSchema;