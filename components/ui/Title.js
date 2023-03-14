import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    width: '80%',
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
});
