import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQEwMBXORUlvjqmWDxOp1EaONFCCO9lR4",
    authDomain: "imessage-clone-yt-a628c.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-a628c.firebaseio.com",
    projectId: "imessage-clone-yt-a628c",
    storageBucket: "imessage-clone-yt-a628c.appspot.com",
    messagingSenderId: "402675802104",
    appId: "1:402675802104:web:4735da8a440c62ff04800d",
    measurementId: "G-3HSZHENS9G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

