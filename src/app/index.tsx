import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Osnovni tekst */}
      <Text style={styles.naslov}>Živjo, svet!</Text>

      {/* Dodatni tekst */}
      <Text style={styles.opis}>
        To je moj prvi napis v Expo aplikaciji.
      </Text>
    </View>
  );
}

// Oblikovanje (CSS v JS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  naslov: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00b34a',
    marginBottom: 10,
  },
  opis: {
    fontSize: 16,
    color: '#009e00',
    textAlign: 'center',
  },
});