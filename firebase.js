import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VTIE_API_KEY,
  authDomain: import.meta.env.VTIE_AUTH_DOMAIN,
  projectId: import.meta.env.VTIE_PROJECT_ID,
  storageBucket: import.meta.env.VTIE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VTIE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VTIE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")