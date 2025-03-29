import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Status = () => {
  // State variables for timer and score
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(0);

  // Function to update the timer
  const incrementTimer = () => {
    setSeconds(prevSeconds => prevSeconds + 1);
  };

  // Function to update the score
  const updateScore = (points) => {
    setScore(prevScore => prevScore + points);
  };

  // Set up the timer when the component mounts
  useEffect(() => {
    const timerInterval = setInterval(incrementTimer, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time: {seconds}s</Text>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: '#2e4242', // Dark Teal
    height: 50,
  },
  timer: {
    color: '#FFFFFF', // White
    fontSize: 18,
  },
  score: {
    color: '#FFFFFF', // White
    fontSize: 18,
  },
});

export default Status;
