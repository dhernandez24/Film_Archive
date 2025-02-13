import auth from '@react-native-firebase/auth';

class FirebaseAuth {
 
  async registerUser(email, password) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.sendEmailVerification();
      return { message: 'Verification email sent! User created successfully!' };
    } catch (error) {
      throw new Error(error.message || 'An error occurred while registering user');
    }
  }

  
  async loginUser(email, password) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      return { message: 'User logged in successfully!' };
    } catch (error) {
      throw new Error(error.message || 'An error occurred while logging in');
    }
  }


  async logoutUser() {
    try {
      await auth().signOut();
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
      await auth().sendPasswordResetEmail(email);
      return { message: 'Password reset email sent!' };
    } catch (error) {
      throw new Error('Error sending password reset email');
    }
  }
}

export default new FirebaseAuth();
