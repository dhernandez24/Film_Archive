import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

class FirebaseAuth {
 
  async registerUser(email, password) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      await userCredential.user.sendEmailVerification();
      return { message: 'Verification email sent! User created successfully!' };
    } catch (error) {
      throw new Error(error.message || 'An error occurred while registering user');
    }
  }

  
  async loginUser(email, password) {
    if (!email || !password) {i
      throw new Error('Email and password are required');
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { message: 'User logged in successfully!' };
    } catch (error) {
      throw new Error(error.message || 'An error occurred while logging in');
    }
  }

  async logoutUser() {
    try {
      await signOut(auth);
      return { message: 'User logged out successfully!' };
    } catch (error) {
      throw new Error('An error occurred while logging out');
    }
  }

 
  async resetPassword(email) {
    if (!email) {
      throw new Error('Email is required');
    }

    try {
      await sendPasswordResetEmail(auth,email);
      return { message: 'Password reset email sent!' };
    } catch (error) {
      throw new Error('Error sending password reset email');
    }
  }
}

export default new FirebaseAuth();
