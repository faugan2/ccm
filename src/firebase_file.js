import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


/*
const firebaseConfig = {
  apiKey: "AIzaSyBbZbzP407pWBHaaAEr48jJkrZm_8F2vfQ",
  authDomain: "prosportguru-a0569.firebaseapp.com",
  projectId: "prosportguru-a0569",
  storageBucket: "prosportguru-a0569.appspot.com",
  messagingSenderId: "46274020109",
  appId: "1:46274020109:web:77138d23dbfecebac1a644"
};*/

const firebaseConfig = {
    apiKey: "AIzaSyBXDvO-FHaUFr_H7T1SvRBnvSopEPzOVJc",
    authDomain: "ccm-courtiers.firebaseapp.com",
    projectId: "ccm-courtiers",
    storageBucket: "ccm-courtiers.appspot.com",
    messagingSenderId: "865115799167",
    appId: "1:865115799167:web:cb2b98e02694a4fe22894a"
  };


let app;

if(firebase.apps.length==0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}



const auth=app.auth();
const db=app.firestore();
const storage=app.storage();




export {auth,db,storage};





