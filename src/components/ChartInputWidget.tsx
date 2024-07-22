import { View, Text, TouchableOpacity,TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ChartInputWidget = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    // onclick enter key should also handleSend 

    const handleSend = () => {
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Chat with chartbot...'
                style={styles.input}
                placeholderTextColor={Colors.light}
                value={inputValue}
                onChangeText={setInputValue}
                onSubmitEditing={handleSend} // Handle Enter key press
                returnKeyType="send" // Show "Send" button on keyboard
            />

            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={{color: Colors.lighter}}>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: Colors.dark,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    input: {
        backgroundColor: Colors.darker,
        padding: 15,
        borderRadius: 20,
        width: '80%',
        paddingHorizontal: 20,
        color: Colors.light,
    },

    sendButton: {
        backgroundColor: Colors.darker,
        padding: 15,
        borderRadius: 20,
        width: '18%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ChartInputWidget