import { StyleSheet, ScrollView } from 'react-native';
import DictionTraining from './src/components/DictionTraining'

export default function App() {

  return (
  <>
    <ScrollView scrollEnabled contentContainerStyle={styles.container}>
      <DictionTraining />
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 18
  },
});
