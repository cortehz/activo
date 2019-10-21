import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdAgUe2ia5B489Ne-Zpuvm8ZAUk7PrGhY",
    authDomain: "activo-ce6c2.firebaseapp.com",
    databaseURL: "https://activo-ce6c2.firebaseio.com",
    projectId: "activo-ce6c2",
    storageBucket: "activo-ce6c2.appspot.com",
    messagingSenderId: "823219410348",
    appId: "1:823219410348:web:69eb3e8a20f6cdc6c09609",
    measurementId: "G-XY79GP680G"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")