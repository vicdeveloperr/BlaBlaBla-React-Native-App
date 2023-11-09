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

        <Text>El ejercicio es simple...</Text>

        <Text>Debes ponerte un lapiz en la boca, y leer los trabalenguas.</Text> 

        <Text>Al completar el ejercicio, se te mostrará la puntuación que alcanzaste, para que lo puedas mejorar.</Text>

        <Text>Este simple, pero útil ejercicio, te ayudará a lograr mayor fluidez a la hora de hablar. Además, notarás tu lengua y musculos de la boca mucho más sueltos.</Text>

        <TouchableOpacity onPress={startTraining}>
            <Text>Iniciar entrenamiento</Text>
        </TouchableOpacity>
    </View>
  );
};

export default DictionTraining;