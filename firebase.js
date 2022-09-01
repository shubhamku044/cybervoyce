import firebase from 'firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAyyFj8kAOc3PKfvaTufdrAlrnNyShMG4E',
	authDomain: 'cybervoyce.firebaseapp.com',
	projectId: 'cybervoyce',
	storageBucket: 'cybervoyce.appspot.com',
	messagingSenderId: '599632997991',
	appId: '1:599632997991:web:901ca21d5d24eee9cb2ec2',
	measurementId: 'G-G358ZRLSYS',
}

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app()

const db = app.firestore()
const auth = app.auth()
const storage = firebase.storage()

export { auth, db, storage }
