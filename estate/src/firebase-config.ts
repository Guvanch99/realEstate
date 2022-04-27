import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCBivjJOpX7Z8ZWblOkEJvc6TZlnOgV3m4',
  authDomain: 'estate-37da2.firebaseapp.com',
  projectId: 'estate-37da2',
  storageBucket: 'estate-37da2.appspot.com',
  messagingSenderId: '458891519574',
  appId: '1:458891519574:web:057f025f70b43aeb95bdf7',
  measurementId: 'G-36WDC4XN9N'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)
