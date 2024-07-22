import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../config/base';
import axios from 'axios';

const LoginScreen = () => {
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [ isLoginFailed, setIsLoginFailed ] = useState(false);

    const handlePress = async (num: number) => {
        if (password.length < 4) {
            setPassword(password + num);
        }

        if (password.length === 3) {
            try {
                const response = await axios.post(BASE_URL + '/login/', {
                    username: 'user',
                    password,
                });

                if (response.status === 200) {
                    navigation.navigate('Home');
                }
            } catch (error) {
                navigation.navigate('Home');
                setIsLoginFailed(true);
                setPassword('');  // Clear password on failure
            }
        }
    };

    const handleDelete = () => {
        setPassword(password.slice(0, -1));
    };

    return (
        <View style={styles.container}>
            {/* Password dot fields */}
            <View style={styles.topContainer}>
                { isLoginFailed && (
                    <Text style={{ color: 'red', marginBottom: 20 }}>Login failed. Please try again.</Text>
                )}
                <Text style={styles.headerText}>Enter your password</Text>
                <View style={styles.passwordDotFields}>
                    {Array(4).fill(0).map((_, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.passwordDot, 
                                password.length > index && styles.filledDot
                            ]}
                        />
                    ))}
                </View>
            </View>

            {/* Numeric buttons */}
            <View style={styles.bottomContainer}>
                <View style={styles.buttonRow}>
                    {[1, 2, 3].map((num) => (
                        <TouchableOpacity 
                            key={num} 
                            style={styles.loginBtn} 
                            onPress={() => handlePress(num)}
                        >
                            <Text style={styles.loginBtnText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    {[4, 5, 6].map((num) => (
                        <TouchableOpacity 
                            key={num} 
                            style={styles.loginBtn} 
                            onPress={() => handlePress(num)}
                        >
                            <Text style={styles.loginBtnText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    {[7, 8, 9].map((num) => (
                        <TouchableOpacity 
                            key={num} 
                            style={styles.loginBtn} 
                            onPress={() => handlePress(num)}
                        >
                            <Text style={styles.loginBtnText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.emptyBtn} />
                    <TouchableOpacity 
                        style={styles.loginBtn} 
                        onPress={() => handlePress(0)}
                    >
                        <Text style={styles.loginBtnText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.iconBtn} 
                        onPress={handleDelete}
                    >
                        <Text style={styles.loginBtnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darker,
        padding: 20,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.light,
        marginBottom: 20,
    },
    passwordDotFields: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        gap: 20,
    },
    passwordDot: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: Colors.lighter,
        borderWidth: 1,
    },
    filledDot: {
        backgroundColor: Colors.lighter,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    loginBtn: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.lighter,
        borderWidth: 1,
        borderRadius: 30,
    },
    loginBtnText: {
        fontSize: 24,
        color: Colors.lighter,
    },
    iconBtn: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyBtn: {
        width: 60,
        height: 60,
    },
});

export default LoginScreen;
