import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDZN9NPNwvjWs93yXAr3R1E9cp8t3KCxh8",
    authDomain: "facebook-clone-a5811.firebaseapp.com",
    databaseURL: "https://facebook-clone-a5811.firebaseio.com",
    projectId: "facebook-clone-a5811",
    storageBucket: "facebook-clone-a5811.appspot.com",
    messagingSenderId: "200520711746",
    appId: "1:200520711746:web:ada898fe4e519bd78bf7db",
    measurementId: "G-QJE819GBNL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;