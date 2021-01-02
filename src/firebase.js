import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIKXbhDOooLZ-aw22hddZptMnoJOmfE5Q",
  authDomain: "clone-72335.firebaseapp.com",
  projectId: "clone-72335",
  storageBucket: "clone-72335.appspot.com",
  messagingSenderId: "351300167189",
  appId: "1:351300167189:web:9a43fdc47af3bb5d50101c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
