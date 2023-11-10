import { StyleSheet, ScrollView } from 'react-native';
import DictionTraining from './src/components/DictionTraining'

export default function App() {

  return (
  <>
    <ScrollView contentContainerStyle={styles.container}>
      <DictionTraining />
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 18,
    maxHeight: 950
  },
});
