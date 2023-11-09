import { StyleSheet, View } from 'react-native';
import DictionTraining from './src/components/DictionTraining'

export default function App() {

  return (
  <>
    <View style={styles.container}>
      <DictionTraining />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
