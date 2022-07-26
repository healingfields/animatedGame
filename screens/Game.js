import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    title: {
        color: 'white'
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
            <Text style={styles.title}>Game Screen</Text>
            <Text style={styles.title}>Starting: {baseNumber}</Text>
            <Button onPress={() => setChoice('higher')} title='higher' />
            <Button onPress={() => setChoice('lower')} title='lower' />
        </View>
    )
}

export default Game