import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    
        apiKey: "AIzaSyBg3Sd_Kd_IWpUk9DLItlcvQtPQFGFmAjI",
        authDomain: "addeki-db.firebaseapp.com",
        projectId: "addeki-db",
        storageBucket: "addeki-db.appspot.com",
        messagingSenderId: "1069553654041",
        appId: "1:1069553654041:web:b64c9cf2cef26f805dcd88",
        measurementId: "G-V5JT5MT9LT"
              };
export const createUserProfileDocument = async (userAuth, additionalData) =>
{
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

             })
         } catch (error) {
             console.log('error creating user', error.message);
         }


    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;