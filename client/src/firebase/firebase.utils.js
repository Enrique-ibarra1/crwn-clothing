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

//the following function is used to create collections for any data it recieves.
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     // console.log(collectionRef);
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj)
//     });

//     return await batch.commit();
// }

//taking the documents from firestore and converting them into objects that can be used in shop components
export const collectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc => {
        const {title, items} = doc.data();
        return {
            //route name will be the title encoded to url format
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    }))
    return  transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;