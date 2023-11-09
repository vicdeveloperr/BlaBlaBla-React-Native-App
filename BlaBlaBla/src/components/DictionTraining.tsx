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
        <Text style={[styles.textNormal, styles.h1]}>¡Ponte un lapíz en la boca, y lee!</Text> 
        {/* Mostrar el trabalenguas actual */}
        <Text style={styles.textNormal}>{tongueTwister}</Text>
        {/* Botón para generar un nuevo trabalenguas */}
        <TouchableOpacity style={styles.button} onPress={generateRandomTongueTwister}>
            <Text style={[styles.textNormal, styles.textButton]}>Generar nuevo trabalenguas</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    personTalkinImg: {
        aspectRatio: '1/1',
        maxHeight: 200
    },
    textNormal: {
        color: '#fff',
        fontSize: 17
    }, 
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%'
    },
    button: {
        backgroundColor: '#d14444',
        borderRadius: 5,
        padding: 8,
        width: '100%'
    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default DictionTraining;