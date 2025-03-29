import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// Define the number of rows and columns for the game board
const numRows = 20;
const numCols = 20;

// Calculate the size of each cell based on screen dimensions
const { width } = Dimensions.get('window'); 
const cellSize = (width-40 )/ numCols;// Subtracting 40 for padding

const GameBoard = () => {
  // Define the initial position of the snake as an array of cells
  const snake = [
    { row: 10, col: 10 },
    { row: 10, col: 9 },
    { row: 10, col: 8 },
  ];

  // Render the game board
  const renderBoard = () => {
    let board = [];
    for (let row = 0; row < numRows; row++) {
      let rowCells = [];
      for (let col = 0; col < numCols; col++) {
        // Check if the current cell is part of the snake
        const isSnake = snake.some(segment => segment.row === row && segment.col === col);
        rowCells.push(
          <View
            key={`${row}-${col}`}
            style={[
              styles.cell,
              {
                width: cellSize,
                height: cellSize,
                backgroundColor: isSnake ? 'green' : 'white',
                borderWidth: 0.5,
                borderColor: '#ddd',
              },
            ]}
          />
        );
      }
      board.push(
        <View key={row} style={styles.row}>
          {rowCells}
        </View>
      );
    }
    return board;
  };

  return <View style={styles.board}>{renderBoard()}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    // flex: ,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameBoard;
