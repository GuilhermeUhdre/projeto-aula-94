import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBXSKFD7JM52SN4pYlqu_gJq0C8vBr5zIY",
  authDomain: "appagenda-2cbd7.firebaseapp.com",
  projectId: "appagenda-2cbd7",
  storageBucket: "appagenda-2cbd7.appspot.com",
  messagingSenderId: "112542759314",
  appId: "1:112542759314:web:8750d707adb0398495a94b"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()
export default database