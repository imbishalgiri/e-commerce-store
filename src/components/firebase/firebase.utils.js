import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMliezbMWrlXymwq568rarY_NP9za2F9g",
    authDomain: "shop-db-5da3d.firebaseapp.com",
    databaseURL: "https://shop-db-5da3d.firebaseio.com",
    projectId: "shop-db-5da3d",
    storageBucket: "shop-db-5da3d.appspot.com",
    messagingSenderId: "987558791515",
    appId: "1:987558791515:web:e2af7281c042f502a6727e",
    measurementId: "G-6FYDCZH4LF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	'prompt': 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;