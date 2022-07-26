import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#EF5B0C'
    }

})

function Result() {

    const route = useRoute();
    const { winner } = route.params;

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Apple Color Emoji', fontSize: 25, marginBottom: 20 }}>You've {winner ? 'won' : 'lost'}</Text>
            {winner ? (
                <LottieView
                    autoPlay
                    style={{ width: 300, height: 300, marginTop: 10 }}
                    source={require('../assets/won.json')}
                />
            ) : (
                <LottieView
                    autoPlay
                    style={{ width: 300, height: 300, marginTop: 10 }}
                    source={require('../assets/lost.json')}
                />
            )}
        </View>
    )
}

export default Result