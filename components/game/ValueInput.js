import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import ValueButton from './ValueButton';

function ValueInput({ type, onValueChange }) {
  // Create state for text input
  const [inputText, setInputText] = useState('0');

  // Set text color based on type
  function getTextColor() {
    if (type === 'red') {
      return '#cc0000';
    } else if (type === 'green') {
      return '#00cc00';
    } else if (type === 'blue') {
      return '#0000cc';
    } else {
      return 'black';
    }
  }
  const textColor = {
    color: getTextColor(),
  };

  // When text is changed or either button is pressed, call a function within the game screen
  function inputHandler(enteredText) {
    setInputText(enteredText);
    const newVal = parseInt(enteredText);
    if (!isNaN(newVal) && 0 <= newVal <= 255) {
      onValueChange(type, newVal);
    }
  }
  function buttonHandler(incr) {
    const newVal = parseInt(inputText) + incr;
    if (newVal < 0) {
      onValueChange(type, 0);
    } else if (newVal > 255) {
      onValueChange(type, 255);
    } else {
      onValueChange(type, newVal);
      setInputText(String(newVal));
    }
  }

  // Return view with 2 buttons and text input
  return (
    <View style={styles.inputContainer}>
      <ValueButton increment={-1} onPress={buttonHandler} >-</ValueButton>
      <TextInput
        style={[styles.input, textColor]}
        value={inputText}
        maxLength={3}
        keyboardType="number-pad"
        onChangeText={inputHandler}
      />
      <ValueButton increment={+1} onPress={buttonHandler} >+</ValueButton>
    </View>
  );
}

export default ValueInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  input: {
    width: 75,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
