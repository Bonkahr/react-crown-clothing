// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, Doc, setDoc, getDoc, doc } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLGWEvLVHR3WSqJEN221Bo-mR_x2mkqFQ',
  authDomain: 'crown-clothing-new-6106c.firebaseapp.com',
  projectId: 'crown-clothing-new-6106c',
  storageBucket: 'crown-clothing-new-6106c.appspot.com',
  messagingSenderId: '848927076339',
  appId: '1:848927076339:web:d7a42386d4195763a8ec86',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

// sign-in with google pop up method
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore database initialization
export const db = getFirestore();

// User creation function.
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef);

  // user snapshot
  const userSnapshot = await getDoc(userDocRef);

  // if user exists return user else create the user
  if (!userSnapshot.exists()) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    // tru to create the user document
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        phoneNumber,
        createdAt,
      });
    } catch (error) {
      console.log('Erroe creating the user', error);
    }
  }

  return userDocRef;
};
