import * as dotenv from 'dotenv';

dotenv.config();

export const Settings = {
  DATABASE_URL: process.env.DATABASE_URL ?? ''
}