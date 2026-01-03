import 'dotenv/config';
import { defineConfig } from 'prisma/config';
// import { defineConfig, env } from 'prisma/config';

export default defineConfig({
 // TODO: Replace PLACEHOLDER with actual database URL or use env variable
 datasource: { url: 'PLACEHOLDER' },
 schema: './prisma/schema.prisma',
});
