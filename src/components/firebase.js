import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDxHBS-g-inWRMT4Jqj_2U1hLF9SMrr7Yk",
    authDomain: "portfolio-eefc3.firebaseapp.com",
    databaseURL: "https://portfolio-eefc3.firebaseio.com",
    projectId: "portfolio-eefc3",
    storageBucket: "portfolio-eefc3.appspot.com",
    messagingSenderId: "756302558203",
    appId: "1:756302558203:web:9967f59093f217b1ac915e"
  
})

const db=firebaseApp.firestore();

export {db}