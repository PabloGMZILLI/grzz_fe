import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8mMMIGNNdJQsW_4Bu7PvlfH-fhFbxFI8",
    authDomain: "grzz-fe-ca6e6.firebaseapp.com",
    databaseURL: "https://grzz-fe-ca6e6-default-rtdb.firebaseio.com",
    projectId: "grzz-fe-ca6e6",
    storageBucket: "grzz-fe-ca6e6.appspot.com",
    messagingSenderId: "653215385117",
    measurementId: "G-8EHT0PE694",
    appId: "1:653215385117:web:7577ef6eab8d3a2bea28f4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default firebase;