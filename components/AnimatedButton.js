import React, { useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'

const styles = StyleSheet.create({
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

function AnimatedButton({ onPress, action }) {

    const opacity = useRef(new Animated.Value(1))

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Animated.timing(opacity.current, {
                    toValue: 0.2,
                    duration: 800,
                    useNativeDriver: true,
                    easing: Easing.linear(),
                }).start(() => onPress())
            }}
        >
            <Animated.View style={[styles.button,
            action === 'higher' ? styles.buttonGreen : styles.buttonRed, { opacity: opacity.current }]}

            >
                <Text style={styles.buttonText}>
                    {action}
                </Text>
            </Animated.View>

        </TouchableWithoutFeedback>
    )
}

export default AnimatedButton