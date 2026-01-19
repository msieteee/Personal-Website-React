import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "../config/config.js";

const firebaseConfig = {
  apiKey: `${env.FIREBASE_API_KEY}`,
  authDomain: `${env.FIREBASE_AUTH_DOMAIN}`,
  projectId: `${env.FIREBASE_PROJECT_ID}`,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
