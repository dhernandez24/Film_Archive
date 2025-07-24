import React, { useState, useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, Animated, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db } from './FirebaseController';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';

const RatingsFromFBD = ({ movieId, movieTitle, starSize = 23, onRatingChange }) => {
  const starOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rating, setRating] = useState(null);
  const animatedButtonScale = new Animated.Value(1);
  const lastTap = useRef(null);

  useEffect(() => {
    const fetchRating = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const ratingRef = doc(db, "users", user.uid, "ratings", movieId.toString());
      const ratingSnap = await getDoc(ratingRef);
      if (ratingSnap.exists()) setRating(ratingSnap.data().stars);
      if (onRatingChange) onRatingChange(ratingSnap.data().stars);
    };
    fetchRating();
  }, [movieId]);



  const handlePress = async (selectedRating) => {

    const now = Date.now();
  if (lastTap.currenr && (now - lastTap.current) < 300) { 
    if (rating === selectedRating) {
    
      setRating(null);
      if (onRatingChange) onRatingChange(null);

      const user = auth.currentUser;
      const ratingRef = doc(db, "users", user.uid, "ratings", movieId.toString());
      await setDoc(ratingRef, {
        userEmail: user.email,
        stars: null,
        time: Timestamp.now(),
        title: movieTitle,
      });
      lastTap.current = null;
      return;
    }
  }


    setRating(selectedRating);
    if (onRatingChange) onRatingChange(selectedRating);
    const user = auth.currentUser;
    const ratingRef = doc(db, "users", user.uid, "ratings", movieId.toString());
    await setDoc(ratingRef, {
      userEmail: user.email,
      stars: selectedRating,
      time: Timestamp.now(),
      title: movieTitle,

    });
    lastTap.current = now;
  };
  const styles = {
    starsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30,
    },
  };

  return (
  <View style={styles.starsContainer}>
    {starOptions.map(option => (
      <TouchableWithoutFeedback key={option} onPress={() => handlePress(option)}>
        <Animated.View style={{ transform: [{ scale: animatedButtonScale }] }}>
          <MaterialIcons
            name={rating >= option ? 'star' : 'star-border'}
            size={starSize}
            color={rating >= option ? '#ffb300' : '#aaa'}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    ))}
  </View>
);
};

export default RatingsFromFBD;
