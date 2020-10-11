import Firebase from 'firebase/app';
import 'firebase/firestore' ;
import 'firebase/auth';
import {seedDatabase} from '../seed';
//we need to somehow seed the database

const config ={
    apiKey: "AIzaSyCAwgkPniDMX0yBJ_Awa2BifEuBVyJgH30",
    authDomain: "netflix-clone-b0c29.firebaseapp.com",
    databaseURL: "https://netflix-clone-b0c29.firebaseio.com",
    projectId: "netflix-clone-b0c29",
    storageBucket: "netflix-clone-b0c29.appspot.com",
    messagingSenderId: "323834416533",
    appId: "1:323834416533:web:14f048e57d08136efffa9c",
    measurementId: "G-M1Z4CHVL7R"

};

const firebase = Firebase.initializeApp(config);


export {firebase};