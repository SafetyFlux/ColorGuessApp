import { View, Text, StyleSheet } from 'react-native';

function ColorBox({ color, children }) {
  // Box color
  const boxColor = {
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
  }
  // Text color (white or black based on box color brightness)
  const brightness = color.r + color.g + color.b;
  const textColor = {
    color: brightness <= 380 ? 'white' : 'black',
  };

  return (
    <View style={[styles.boxContainer, boxColor]}>
      <Text style={[styles.text, textColor]}>{children}</Text>
    </View>
  );
}

export default ColorBox;

const styles = StyleSheet.create({
  boxContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});
