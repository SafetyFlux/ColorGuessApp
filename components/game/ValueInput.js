import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import ValueButton from './ValueButton';

function ValueInput({ type, textColor, min, max, onValueChange }) {
  // Create state for text input
  const [inputText, setInputText] = useState('0');

  // Set text color style from prop
  const textStyle = {
    color: textColor,
  };

  // When text is changed or either button is pressed, call a function within the game screen
  function inputHandler(enteredText) {
    setInputText(enteredText);
    const newVal = parseInt(enteredText);
    if (!isNaN(newVal) && min <= newVal <= max) {
      onValueChange(type, newVal);
    }
  }
  function buttonHandler(incr) {
    const newVal = parseInt(inputText) + incr;
    if (newVal < min) {
      onValueChange(type, min);
    } else if (newVal > max) {
      onValueChange(type, max);
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
        style={[styles.input, textStyle]}
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
