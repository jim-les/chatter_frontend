import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


const IntroScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeNote}>Explore</Text>
            <Text style={styles.welcomeNote}>Infinite</Text>
            <Text style={styles.welcomeNotes }>capabilites</Text>
            <Text style={styles.welcomeNote}>of mchart</Text>

            <View style={{marginTop: 40, width: '100%'}}>
                <View style={styles.featuresContainer}>
                    <View style={styles.iconContainer}></View>
                    <Text style={styles.featureText}>Remembers what the user said earlier in the conversation</Text>
                </View>

                <View style={styles.featuresContainer}>
                    <View style={styles.iconContainer}></View>
                    <Text style={styles.featureText}>Provides personalized responses based on user input</Text>
                </View>

                <View style={styles.featuresContainer}>
                    <View style={styles.iconContainer}></View>
                    <Text style={styles.featureText}>Continuously learns and improves over time</Text>
                </View>
            </View>

            {/* login and register */}
            <View style={ styles.loginRegisterContainer }>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: Colors.lighter, fontSize: 20}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color: Colors.dark, fontSize: 20}}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darker,
        padding: 20,
    },

    welcomeNote: {
        fontSize: 50,
        fontWeight: 'bold',
        color:  Colors.lighter
    },

    welcomeNotes: {
        fontSize: 50,
        fontWeight: 'bold',
        color:  Colors.primary,
    },

    featuresContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: Colors.dark,
        borderRadius: 10,
        padding: 10,
    },

    iconContainer: {
        width: 80,
        height: 70,
        backgroundColor: Colors.darker,
        borderRadius: 10,
        marginRight: 15,
    },

    featureText: {
        fontSize: 18,
        color: Colors.lighter,
        flexShrink: 1,
    },

    loginRegisterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        position: 'absolute',
        bottom: 20,
        width: '100%',
        left: 20,
    },

    loginButton: {
        backgroundColor: Colors.darker,
        borderWidth: 1,
        borderColor: Colors.lighter,
        padding: 20,
        borderRadius: 20,
        width: '48%',
        alignItems: 'center'
    },

    registerButton: {
        backgroundColor: Colors.light,
        padding: 20,
        borderRadius: 20,
        width: '48%',
        alignItems: 'center'
    }


})

export default IntroScreen