import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOe0fTmDO0moTFCWN-jE48LiknwcIuaDo",
    authDomain: "vue-3-techat.firebaseapp.com",
    projectId: "vue-3-techat",
    storageBucket: "vue-3-techat.appspot.com",
    messagingSenderId: "755030977340",
    appId: "1:755030977340:web:0bb422f2556414dfb0cc39"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize authentication
const projectAuth = firebase.auth()

// Initialize firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }


