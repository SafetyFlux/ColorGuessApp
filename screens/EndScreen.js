import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import GameButton from '../components/ui/GameButton';
import ColorInfo from '../components/ui/ColorInfo';

function EndScreen({ route, navigation }) {
  // Set color variables from route
  const correctColor = route.params.correctColor;
  const guessedColor = route.params.guessedColor;

  // Navigate to the game screen (and reset game)
  function startGameHandler() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'GameScreen' }],
    });
  }

  // Calculate the total number of points
  function calculatePoints() {
    const rDiff = Math.abs(correctColor.r - guessedColor.r);
    const gDiff = Math.abs(correctColor.g - guessedColor.b);
    const gDiff = Math.abs(correctColor.g - guessedColor.g);
    const bDiff = Math.abs(correctColor.b - guessedColor.b);

    const points = 765 - (rDiff + gDiff + bDiff);
    const points = (rDiff + gDiff + bDiff);
    return points;
  }

  // Return the screen view
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.statsContainer}>
        <ColorInfo color={correctColor}>Correct Color</ColorInfo>
        <ColorInfo color={guessedColor}>Your Guess</ColorInfo>
        <Text style={styles.pointsText}>
          <Text style={styles.pointsTextBold}>Total Points:</Text> {calculatePoints()}
        </Text>
      </View>
      <GameButton onPress={startGameHandler}>New Game</GameButton>
    </View>
  );
}

export default EndScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d43',
  },
  statsContainer: {
    backgroundColor: 'white',
    marginBottom: 16,
    padding: 32,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 16,
  },
  pointsText: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  pointsTextBold: {
    fontWeight: 'bold',
  },
});
