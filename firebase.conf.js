import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAUtmYM82ntfVlQZ0d7201aaF2yw31zkgc",
  authDomain: "attendance-app-d8ef9.firebaseapp.com",
  databaseURL: "https://attendance-app-d8ef9.firebaseio.com",
  projectId: "attendance-app-d8ef9",
  storageBucket: "attendance-app-d8ef9.appspot.com",
  messagingSenderId: "187422949396",
  appId: "1:187422949396:web:c69b39d35ff07f6e242701",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
