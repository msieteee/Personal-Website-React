import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const FLAMELINK_SCHEMA = {
  EXPERIENCE: "experience",
  PORTFOLIO: "projectPortfolio",
};

export type SchemaName =
  (typeof FLAMELINK_SCHEMA)[keyof typeof FLAMELINK_SCHEMA];

export const getEntriesBySchema = async (schemaName: SchemaName) => {
  const ref = collection(db, "fl_content");

  const q = query(ref, where("_fl_meta_.schema", "==", schemaName));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
