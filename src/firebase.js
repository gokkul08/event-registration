import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyD4i9Pi_jU1NlcOIgGDBUYfkCxx7-MCIgA",
    authDomain: "event-registration-iac.firebaseapp.com",
    databaseURL: "https://event-registration-iac.firebaseio.com",
    projectId: "event-registration-iac",
    storageBucket: "event-registration-iac.appspot.com",
    messagingSenderId: "281915809309",
    appId: "1:281915809309:web:70ea0e8d53e5781c3ab0f4",
    measurementId: "G-GGTD0SDX51"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;
    // Get a reference to the place in the database where a user profie might be
    const userRef = firestore.doc(`users/${user.uid}`);

    // Go and fetch the document from that location
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error creating user", error);
        }
    }

    return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        return firestore.collection("users").doc(uid);
    } catch (error) {
        console.error("Error fetching user", error.message);
    }
};

window.firebase = firebase;
export default firebase;
