import dotenv from 'dotenv';
import z from 'zod';

dotenv.config();

const schema = z.object({
    PORT: z.coerce.number(),
    SESSION_SECRET: z.string(),
    SESSION_NAME: z.string(),
    MONGO_DB_URI: z.string()
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
    console.error(parsed.error.issues);
    throw new Error('👿 Invalid environment variables:');
}

type EnvType = z.infer<typeof schema>;
const env: EnvType = parsed.data;
export { env };