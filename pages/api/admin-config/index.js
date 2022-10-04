import admin from "firebase-admin";

const setUp = () => {
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(
          require("../../../services/firebaseServicesAdmin/firebase_key.json")
        ),
        databaseURL: process.env.NEXT_PUBLIC_REALTIME_DATABASE,
      });
    } catch (error) {
      console.log("Firebase admin initialization error", error);
    }
  }
};

setUp();

const db = admin.database();
const adminAuth = admin.auth();

export { admin, adminAuth, db };
