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
export const db = firebase.firestore().collection("todos");