import { Pressable, Text, StyleSheet } from 'react-native';

function GameButton({ children, onPress }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default GameButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    marginVertical: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
