import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AnimatedButton from '../components/AnimatedButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A4495'
    },
    baseNumber: {
        color: 'white',
        fontSize: 40,
        marginBottom: 20,
        fontFamily: 'Apple Color Emoji'
    },

})

function Game() {

    const navigation = useNavigation();

    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);
    const [choice, setChoice] = useState('');

    useEffect(() => {
        if (choice) {
            const winner =
                (choice === 'higher' && score > baseNumber) ||
                (choice === 'lower' && score < baseNumber);

            navigation.navigate('Result', { winner });
        }
    }, [baseNumber, score, choice])

    return (
        <View style={styles.container}>
            <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>
            <AnimatedButton onPress={() => setChoice('higher')} action='higher' />
            <AnimatedButton onPress={() => setChoice('lower')} action='lower' />

        </View>
    )
}

export default Game