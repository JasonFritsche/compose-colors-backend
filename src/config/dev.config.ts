import * as dotenv from 'dotenv';

dotenv.config();

export const devConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN,
};
