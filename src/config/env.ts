import 'dotenv/config';

const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export {env};
