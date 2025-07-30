import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileSettings = () => {


  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>
      <Text style={styles.username}>Welcome,</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:100,
    fontWeight: 'bold',
    marginBottom: 470,
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#252525',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileSettings;