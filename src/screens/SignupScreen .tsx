import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Ensure axios is installed
import { BASE_URL } from '../config/base';
const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Added state for loader

    const handleSignup = async () => {
        if (username.trim() === '' || password.trim().length !== 4) {
            Alert.alert('Invalid Input', 'Username and 4-digit password are required.');
            return;
        }

        setLoading(true); // Start loading

        try {
            const response = await axios.post(BASE_URL + '/signup/', {
                username,
                password,
            });
            Alert.alert('Success', response.data.message);
            navigation.navigate('Login'); // Navigate to the Login screen after successful signup
        } catch (error) {
            Alert.alert('Error', error.response ? error.response.data.detail : 'Signup failed');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password (4 digits)"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                keyboardType="numeric"
                maxLength={4}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#007BFF" />
                    <Text style={styles.loaderText}>Signing up...</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    loaderText: {
        marginLeft: 10,
        color: '#333',
    },
});

export default SignupScreen;
