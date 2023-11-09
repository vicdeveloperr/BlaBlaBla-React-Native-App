// DictionTraining.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Training from './Training'

const DictionTraining: React.FC = () => {
  return (
    <View>
        <Text>¡Ponte un lapíz en la boca, y lee!</Text> 
        <Training />
    </View>
  );
};

export default DictionTraining;