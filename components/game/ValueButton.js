import { Pressable, Text, StyleSheet } from 'react-native';

function ValueButton({ children, increment, onPress }) {
  // Set button colors based on whether increment is positive or negative
  const buttonColor = {
    backgroundColor: ( increment > 0 ? '#ceffbb' : '#ffafaf' ),
  };
  const buttonPressedColor = {
    backgroundColor: ( increment > 0 ? '#aafd8a' : '#ff9393' ),
  };

  // Helper function for button press
  function valuePressHandler() {
    onPress(increment);
  }

  // Return pressable with text
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer, buttonColor,
        pressed ? buttonPressedColor : null
      ]}
      onPress={valuePressHandler}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default ValueButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
