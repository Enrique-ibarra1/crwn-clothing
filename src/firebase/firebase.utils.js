import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//config object can be found in the firebase console, in the script to link to a web app
//according to firebase devs, this api key is safe to make public as it is only used to ID the app
const config = {
    apiKey: "AIzaSyA_7Yc3wdApnjhKjw0seOUjwNUHHpRB15Y",
    authDomain: "crwn-db-6670c.firebaseapp.com",
    projectId: "crwn-db-6670c",
    storageBucket: "crwn-db-6670c.appspot.com",
    messagingSenderId: "618691396137",
    appId: "1:618691396137:web:a4ff10c38cb82bf690d238",
    measurementId: "G-WLRT7DCW6F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;