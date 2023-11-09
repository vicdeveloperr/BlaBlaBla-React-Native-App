import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DictionTraining from './src/components/DictionTraining'
import Training from './src/components/Training'

export default function App() {
  return (
    <View style={styles.container}>
      <Training />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
