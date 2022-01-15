import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAX4boRNci6VRfvkz9lDqrbvT7FytZaQPk',
  authDomain: 'e-clone-c7b8a.firebaseapp.com',
  projectId: 'e-clone-c7b8a',
  storageBucket: 'e-clone-c7b8a.appspot.com',
  messagingSenderId: '168730414942',
  appId: '1:168730414942:web:51c333dfbf52b8d8d689cf',
  measurementId: 'G-YF6L17NHP8',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
