import {initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';
import admin from 'firebase-admin';
import {env} from './env';

const firebaseApp = initializeApp({
  credential: admin.credential.cert({
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY,
    projectId: env.FIREBASE_PROJECT_ID,
  }),
});
const authApp = getAuth(firebaseApp);

export {firebaseApp, authApp};
