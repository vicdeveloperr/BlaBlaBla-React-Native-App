// DictionTraining.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DictionTraining: React.FC = () => {
  const startTraining = () => {
    // Lógica para iniciar el entrenamiento
    console.log('Entrenamiento iniciado');
  };

  return (
    <View>
      <Text>¡Mejora tu dicción!</Text>
      <TouchableOpacity onPress={startTraining}>
        <Text>Iniciar entrenamiento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DictionTraining;