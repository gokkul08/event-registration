import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBLAC25gh8KmCsm6sUflZi1EnmXiJlhIVE",
    authDomain: "event-registration-gokkul.firebaseapp.com",
    databaseURL: "https://event-registration-gokkul.firebaseio.com",
    projectId: "event-registration-gokkul",
    storageBucket: "event-registration-gokkul.appspot.com",
    messagingSenderId: "983889783728",
    appId: "1:983889783728:web:c7eec830d7c45c68b74475",
    measurementId: "G-X2349T9V8Z"
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
