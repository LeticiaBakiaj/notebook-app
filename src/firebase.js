import firebase from 'firebase';

var firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCHoP1imowxVNNy9RPXcgt-d-pVdLfA244",
    authDomain: "notebook-app-1ce0e.firebaseapp.com",
    databaseURL: "https://notebook-app-1ce0e-default-rtdb.firebaseio.com",
    projectId: "notebook-app-1ce0e",
    storageBucket: "notebook-app-1ce0e.appspot.com",
    messagingSenderId: "892521341892",
    appId: "1:892521341892:web:1e97d6cfb7e10c64ee3a91",
    measurementId: "G-RHC1YWVN0Y"
  });
  // Initialize Firebase
var db = firebaseApp.firestore();
export const auth=firebase.auth();
export  {db};
 
//var fireDb= firebase.initializeApp(firebaseConfig);
//export default fireDb.database().ref();