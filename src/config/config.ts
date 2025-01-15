import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

export default {
  app: {
    port: process.env.PORT || 4040,
  },
};

export const prisma = new PrismaClient();
