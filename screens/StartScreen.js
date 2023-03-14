import { View, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import GameButton from '../components/ui/GameButton';

function StartScreen() {
  function startGameHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.container}>
      <Title>Welcome to the Color Guessing Game! Press the button to begin.</Title>
      <GameButton onPress={startGameHandler}>Start Game</GameButton>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d43',
  },
});
