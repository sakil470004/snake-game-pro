import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GameController = ({ onMove }) => {
  // Function to handle button presses
  const handlePress = direction => {
    if (onMove) {
      onMove(direction);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.upButton]}
          onPress={() => handlePress('up')}>
          <Text style={styles.buttonText}>↑</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.leftButton]}
          onPress={() => handlePress('left')}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.centerButton]}
          onPress={() => handlePress('center')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={() => handlePress('right')}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.downButton]}
          onPress={() => handlePress('down')}>
          <Text style={styles.buttonText}>↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  upButton: {
    backgroundColor: '#2196F3',
  },
  downButton: {
    backgroundColor: '#FF5722',
  },
  leftButton: {
    backgroundColor: '#FFC107',
  },
  centerButton: {
    backgroundColor: '#9C27B0',
  },
  rightButton: {
    backgroundColor: '#FF9800',
  },
});

export default GameController;
