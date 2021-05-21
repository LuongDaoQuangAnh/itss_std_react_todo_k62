import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5vLlpr3ms9z5Ws5rg4Ph8yqVeoXjDAt4",
    authDomain: "itss-to-do.firebaseapp.com",
    projectId: "itss-to-do",
    storageBucket: "itss-to-do.appspot.com",
    messagingSenderId: "391533464992",
    appId: "1:391533464992:web:eb737f85d7edcb6247a8c5"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db_todo = firebase.firestore().collection("todo");
export const db_user = firebase.firestore().collection("user");
export const storageImage = firebase.storage().ref();

export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};
export const saveImage = (url) => {

};