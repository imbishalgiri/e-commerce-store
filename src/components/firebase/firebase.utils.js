import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBu-7N3dmNajLveklQEYEoqCMykCGuy5h4",
    authDomain: "my-shop-e70e6.firebaseapp.com",
    databaseURL: "https://my-shop-e70e6.firebaseio.com",
    projectId: "my-shop-e70e6",
    storageBucket: "my-shop-e70e6.appspot.com",
    messagingSenderId: "714269323760",
    appId: "1:714269323760:web:c9436db65ad5e6f8fc6d35",
    measurementId: "G-5KLXD6F2SE"
};


export const createUserProfileDocument = async (userAuth, otherData) => {
    if(!userAuth) return

    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists) {
        // create a piece of data
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...otherData
            })
        } catch (err){
            console.log('erorr creating the user', err.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	'prompt': 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;