import { config } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

config({
 quiet: true,
 path: '../../.env',
});

export default defineConfig({
 datasource: {
  url: `${env('MAIN_DATABASE_URL').replace('postgres:5432', process.env.LOCAL === 'true' ? 'localhost:5432' : 'postgres:5432')}/Ayako-v3`,
 },
 schema: './prisma/schema.prisma',
});
