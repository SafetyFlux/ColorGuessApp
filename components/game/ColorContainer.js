import { View, StyleSheet } from 'react-native';

function ColorContainer({ guessColor }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.middleContainer}>
        <View style={[styles.innerContainer, { backgroundColor: guessColor }]} />
      </View>
    </View>
  );
}

export default ColorContainer;

const styles = StyleSheet.create({
  outerContainer: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderWidth: 8,
    borderColor: 'black',
    borderRadius: 8,
  },
  middleContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 8,
    borderColor: 'white',
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    borderWidth: 8,
    borderColor: 'black',
    borderRadius: 8,
  }
});
