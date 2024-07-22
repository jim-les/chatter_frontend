import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const chatbot = require('../assets/chatbot.png');
// components
import Recent from '../components/Recent';
import Automation from '../components/Automation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    // function to determine whether it is morning, afternoon, or evening
    const getGreeting = () => {
        const date = new Date();
        const hours = date.getHours();
        if (hours < 12) {
            return 'morning';
        } else if (hours < 18) {
            return 'afternoon';
        } else {
            return 'evening';
        }
    };

    const handleNavigation = (prompt: string) => {
        navigation.navigate('Chart', { prompt });
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, paddingBottom: 100 }}>
                {/* Greetings and profile pic in flex */}
                <View style={styles.greetingsContainer}>
                    <Text style={styles.greetings}>
                        Good {getGreeting()}, Jeff
                    </Text>
                    <View style={styles.profilePic}>
                        <Image source={chatbot} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
                    </View>
                </View>

                {/* Recent */}
                <TouchableOpacity onPress={() => handleNavigation('Here are some recent charts.')}>
                    <Recent />
                </TouchableOpacity>

                {/* Automation */}
                <TouchableOpacity onPress={() => handleNavigation('Check out the automation charts.')}>
                    <Automation />
                </TouchableOpacity>

                {/* Trending Prompt */}
                {/* <TrendingPrompt /> */}

                {/* Start button */}
                <TouchableOpacity style={styles.startChartBtn} onPress={() => handleNavigation('Let\'s start charting')}>
                    <Text style={{ color: Colors.darker, fontSize: 20, fontWeight: 'bold' }}>Start charting</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darker,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    greetingsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    greetings: {
        fontSize: 44,
        color: Colors.light,
        fontWeight: 'bold',
        maxWidth: '70%',
    },

    profilePic: {
        width: 100,
        height: 100,
        backgroundColor: Colors.light,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: Colors.primary,
    },

    startChartBtn: {
        backgroundColor: Colors.light,
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
});

export default HomeScreen;
