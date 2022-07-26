import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { LongPressGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 150,
        backgroundColor: 'black'
    },
    title: {
        color: 'white'
    }
})

function Home() {

    const navigation = useNavigation();

    const onTap = (e) => {
        if (e.nativeEvent.state === State.ACTIVE) {
            Alert.alert('Long press to start the game')
        }
    }

    const onLongPress = (e) => {
        if (e.nativeEvent.state === State.ACTIVE) {
            navigation.navigate('Game')
        }
    }

    return (
        <View style={styles.container}>
            <TapGestureHandler
                onHandlerStateChange={onTap}
            >
                <LongPressGestureHandler
                    onHandlerStateChange={onLongPress}
                    minDurationMs={600}
                >
                    <View onPress={() => navigation.navigate('Game')} style={styles.button}
                    >
                        <Text style={styles.title}>Start a Game!</Text>
                    </View>
                </LongPressGestureHandler>
            </TapGestureHandler>
        </View>
    )
}

export default Home