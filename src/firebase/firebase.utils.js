import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDT4OH5IEV968suEYejNjovj-_E5cNqsMM",
    authDomain: "ebay-db-de247.firebaseapp.com",
    projectId: "ebay-db-de247",
    storageBucket: "ebay-db-de247.appspot.com",
    messagingSenderId: "723796263676",
    appId: "1:723796263676:web:e19a6db22e38bb80dd8d79",
    measurementId: "G-XB7QB61YMC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            throw new Error(e);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;