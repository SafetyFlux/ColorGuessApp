import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorContainer from '../components/game/ColorContainer';
import ValueInput from '../components/game/ValueInput';
import GameButton from '../components/ui/GameButton';

// Generate a random number within a range
function generateRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Pick a random color and return an object with rgb values
function pickRandomColor() {
  const red = generateRandomBetween(0, 256);
  const green = generateRandomBetween(0, 256);
  const blue = generateRandomBetween(0, 256);

  return { r: red, g: green, b: blue };
}

function GameScreen({ navigation }) {
  // Color that needs to be guessed
  const [correctColor, setCorrectColor] = useState(null);
  // User's guess
  const [guessedColor, setGuessedColor] = useState({ r: 0, g: 0, b: 0 });
  const [guessBackground, setGuessBackground] = useState('rgb(0, 0, 0)');

  // Set random color when the screen loads
  useEffect(() => {
    setCorrectColor(pickRandomColor());
  }, []);

  // Style for random-colored background
  const randomBackground = {
    backgroundColor: (
      correctColor ?
      `rgb(${correctColor.r}, ${correctColor.g}, ${correctColor.b})` :
      '#001d43'
    ),
  };

  useEffect(() => {
    setGuessBackground(`rgb(${guessedColor.r}, ${guessedColor.g}, ${guessedColor.b})`);
  }, [guessedColor, guessBackground]);

  // Automatically set style of status bar based on background
  function statusBarColor() {
    const brightness = correctColor.r + correctColor.g + correctColor.b;
    return ( brightness <= 380 ? 'light' : 'dark' );
  }

  // Change the color state
  function colorChangeHandler(type, newValue) {
    // Set temporary values for old color
    let red = guessedColor.r;
    let green = guessedColor.g;
    let blue = guessedColor.b;
    // Set new variable based on input type
    if (type === 'red') {
      red = newValue;
    } else if (type === 'green') {
      green = newValue;
    } else if (type === 'blue') {
      blue = newValue;
    }
    // Set color state
    setGuessedColor({ r: red, g: green, b: blue });
  }

  // Navigate to end screen when guess button is pressed
  function endGameHandler() {
    navigation.navigate('EndScreen', {
      correctColor: correctColor,
      guessedColor: guessedColor,
    });
  }

  // Return screen view
  return (
    <>
      <StatusBar style={correctColor ? statusBarColor() : 'light'} />
      <View style={[styles.container, randomBackground]}>
        <View>
          <ColorContainer guessColor={guessBackground} />
        </View>
        <View style={styles.inputContainer}>
          <ValueInput type="red" onValueChange={colorChangeHandler} />
          <ValueInput type="green" onValueChange={colorChangeHandler} />
          <ValueInput type="blue" onValueChange={colorChangeHandler} />
        </View>
        <GameButton onPress={endGameHandler}>Guess!</GameButton>
      </View>
    </>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 32,
  },
});
