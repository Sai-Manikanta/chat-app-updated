import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVaM9FaI1T0VkfrZyn2aMVJWCh2CQK-Go",
    authDomain: "chat-app-d1dac.firebaseapp.com",
    projectId: "chat-app-d1dac",
    databaseURL: "https://chat-app-d1dac-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "chat-app-d1dac.appspot.com",
    messagingSenderId: "444415039721",
    appId: "1:444415039721:web:88af1663cb9b0ff7c9b878"
};

firebase.initializeApp(firebaseConfig);

export default firebase

// const firebaseConfig = {
//     apiKey: "AIzaSyCVaM9FaI1T0VkfrZyn2aMVJWCh2CQK-Go",
//     authDomain: "chat-app-d1dac.firebaseapp.com",
//     projectId: "chat-app-d1dac",
//     storageBucket: "chat-app-d1dac.appspot.com",
//     messagingSenderId: "444415039721",
//     appId: "1:444415039721:web:88af1663cb9b0ff7c9b878"
//   };