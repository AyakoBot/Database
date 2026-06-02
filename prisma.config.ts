import { config } from 'dotenv';
import { defineConfig } from 'prisma/config';

config({
 quiet: true,
 path: '../../.env',
});

// `prisma generate` is offline and only needs the datasource provider, not a reachable URL.
// Use a lenient lookup with a syntactically-valid fallback so an empty/missing MAIN_DATABASE_URL
// doesn't throw PrismaConfigEnvError and block client generation. Migrate/studio still use the
// real URL whenever it is set in ../../.env.
const databaseUrl = process.env.MAIN_DATABASE_URL || 'postgresql://user:password@postgres:5432';

export default defineConfig({
 datasource: {
  url: `${databaseUrl.replace('postgres:5432', process.env.LOCAL === 'true' ? 'localhost:5432' : 'postgres:5432')}/Ayako-v3`,
 },
 schema: './prisma/schema.prisma',
});
