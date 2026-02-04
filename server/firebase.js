import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

if (process.env.NODE_ENV !== "production") {
  await import("dotenv").then((dotenv) => dotenv.config());
}

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
