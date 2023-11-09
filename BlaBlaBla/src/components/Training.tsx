import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native'

const DictionTrainingController: React.FC = () => {
  const [tongueTwister, setTongueTwister] = useState<string>('');

  const generateRandomTongueTwister = () => {
    // Lista de trabajenguas (puedes agregar más)
    const tongueTwisters = [
      "Tres tristes tigres tragan trigo en un trigal.",
      "Pedro Pérez pintor pinta preciosos paisajes por poco precio.",
      "Cómo poco coco como, poco coco compro.",
    ];

    // Seleccionar un trabalenguas aleatorio
    const randomIndex = Math.floor(Math.random() * tongueTwisters.length);
    const randomTongueTwister = tongueTwisters[randomIndex];

    // Mostrar el trabalenguas
    setTongueTwister(randomTongueTwister);
  };

  const startTraining = () => {
    // Lógica para iniciar el entrenamiento
    console.log('Entrenamiento iniciado con el trabalenguas:', tongueTwister);
  };

  return (
    <>
        {/* Mostrar el trabalenguas actual */}
        <Text>{tongueTwister}</Text>
        {/* Botón para generar un nuevo trabalenguas */}
        <TouchableOpacity onPress={generateRandomTongueTwister}>
        <Text>Generar nuevo trabalenguas</Text>
        </TouchableOpacity>
    </>
  );
};

export default DictionTrainingController;