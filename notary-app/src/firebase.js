// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxmW99hv7iaHxTSSsRHtk0-2vAJ11I0j8",
  authDomain: "notarywebapp-75338.firebaseapp.com",
  projectId: "notarywebapp-75338",
  storageBucket: "notarywebapp-75338.firebasestorage.app",
  messagingSenderId: "510354313983",
  appId: "1:510354313983:web:bd3e95f0bd9390e115f2ca"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
