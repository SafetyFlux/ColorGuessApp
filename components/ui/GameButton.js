import { Pressable, Text, StyleSheet } from 'react-native';

function GameButton({ children, onPress }) {
  // Returns a pressable with a white background and black border, containing text
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed ? styles.buttonPressed : null
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default GameButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    marginTop: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
