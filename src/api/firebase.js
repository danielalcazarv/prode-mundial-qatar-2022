import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhFrr3Uwa2qGXXDYhLD69oI0lReFNodRw",
    authDomain: "prode-mundial-qatar-2022.firebaseapp.com",
    projectId: "prode-mundial-qatar-2022",
    storageBucket: "prode-mundial-qatar-2022.appspot.com",
    messagingSenderId: "758512469761",
    appId: "1:758512469761:web:25b820df344d2fe9b4fd00"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
//export const auth = getAuth (app)