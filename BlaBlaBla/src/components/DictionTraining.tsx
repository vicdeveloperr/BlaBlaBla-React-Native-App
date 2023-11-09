// DictionTraining.tsx

import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { tongueTwister1, tongueTwister2, tongueTwister3, tongueTwister4, tongueTwister5 } from '../utils/Trabalenguas';

const DictionTraining: React.FC = () => {

    const [tongueTwister, setTongueTwister] = useState<string>(tongueTwister1);
    const generateRandomTongueTwister = () => {

        // Lista de trabalenguas
        const tongueTwisters = [
        tongueTwister1,
        tongueTwister2,
        tongueTwister3,
        tongueTwister4,
        tongueTwister5
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
        <Image 
            style={styles.personTalkinImg} 
            source={
                require('../../assets/personTalking.png')
            } 
        />
        <Text>¡Ponte un lapíz en la boca, y lee!</Text> 
        {/* Mostrar el trabalenguas actual */}
        <Text>{tongueTwister}</Text>
        {/* Botón para generar un nuevo trabalenguas */}
        <TouchableOpacity onPress={generateRandomTongueTwister}>
        <Text>Generar nuevo trabalenguas</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    personTalkinImg: {
        aspectRatio: '1/1',
        maxHeight: 200
    }
});

export default DictionTraining;