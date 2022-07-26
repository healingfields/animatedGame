import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AnimatedButton from '../components/AnimatedButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    baseNumber: {
        color: 'white',
        fontSize: 50,
        marginBottom: 20
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'pink',
        paddingHorizontal: 60,
        paddingVertical: 20,
        marginVertical: 15
    },
    buttonRed: {
        backgroundColor: 'red'
    },
    buttonGreen: {
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
    }
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

            Alert.alert(`You ve ${winner ? 'won' : 'lost'}`,
                `You scored ${score}`);
            navigation.goBack();
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