import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7RImlKe2OO-fEAEDLW4M1JKU-cXnlhI4",
  authDomain: "personal-website-e930c.firebaseapp.com",
  projectId: "personal-website-e930c",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
