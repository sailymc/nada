

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBcOE7129vScI4a7dfwyz9RGackZzFf1F4",
  authDomain: "agendadecontactos-944d0.firebaseapp.com",
  databaseURL: "https://agendadecontactos-944d0-default-rtdb.firebaseio.com",
  projectId: "agendadecontactos-944d0",
  storageBucket: "agendadecontactos-944d0.appspot.com",
  messagingSenderId: "144347081501",
  appId: "1:144347081501:web:7d70a067db2370e49c4ff4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
