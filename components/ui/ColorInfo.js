import { View, Text, StyleSheet } from 'react-native';

function GameStats({ children, color }) {
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.header}>{children}</Text>
      </View>
      <View style={styles.rgbContainer}>
        <Text style={[styles.rgbText, { color: '#cc0000' }]}>{color.r}</Text>
        <Text style={[styles.rgbText, { color: '#00cc00' }]}>{color.g}</Text>
        <Text style={[styles.rgbText, { color: '#0000cc' }]}>{color.b}</Text>
      </View>
    </View>
  );
}

export default GameStats;

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rgbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rgbText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});
