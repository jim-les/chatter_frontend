import { View, Text, ScrollView, StyleSheet, Alert, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRoute, useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../config/base';

// images
const chartbot = require('../assets/chatbot.png');

// components
import Topbar from '../components/Topbar';
import ChartBotWidget from '../components/ChartBotWidget';
import ChartuserWidget from '../components/ChartuserWidget';
import ChartInputWidget from '../components/ChartInputWidget';

const ChartScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { prompt } = route.params as { prompt: string };

    const [isEmpty, setIsEmpty] = useState(true);
    const [charts, setCharts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const addChartMessage = async (message: string) => {
        setIsEmpty(false);
        const newMessage = {
            id: Date.now().toString(),
            threadTitle: 'New Chat',
            user: 'user',
            request: message,
            time: new Date().toLocaleTimeString(),
        };

        setCharts((prevCharts: any) => [...prevCharts, newMessage]);
        setIsLoading(true);
        try {
            console.log('message:', message);
            const response = await fetch(`${BASE_URL}/chat/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const botMessage = {
                id: Date.now().toString() + "b",
                threadTitle: 'New Chat',
                user: 'chatbot',
                reply: data.message,
                time: new Date().toLocaleTimeString(),
            };
            setCharts((prevCharts: any) => [...prevCharts, botMessage]);
        } catch (error) {
            console.log('Fetch error:', error);
            Alert.alert('Error', 'An error occurred while sending message');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* topbar */}
            <Topbar setToggleDrawer={setToggleDrawer} toggleDrawer={toggleDrawer} />

            {/* drawer */}
            {toggleDrawer && (
                <View style={styles.drawer}>
                    <View style={{ alignItems: 'center', padding: 20, borderBottomColor: Colors.dark, borderWidth: .3 }}>
                        <Text style={styles.drawTitle}>Chart History</Text>
                    </View>

                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ color: Colors.dark }}>No chart History</Text>
                    </View>
                </View>
            )}

            {isEmpty ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={chartbot} style={{ width: 100, height: 100 }} />
                    <Text style={{ color: Colors.light }}>Hello there, I am chartbot. Let's chat...</Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 20 }}>
                    {charts.map((item: { user: any; id: any; threadTitle?: string; reply?: string; time?: string; }) => (
                        item.user === 'user' ?
                            <ChartuserWidget key={item.id} item={item} /> : <ChartBotWidget key={item.id} item={item} />
                    ))}
                    {isLoading && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color={Colors.light} />
                            <Text style={styles.loadingText}>This may be taking a while...</Text>
                        </View>
                    )}
                </ScrollView>
            )}

            <ChartInputWidget onSend={addChartMessage} />

            {prompt && (
                <View style={styles.promptContainer}>
                    <Text style={styles.promptText}>{prompt}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    drawer: {
        position: 'absolute',
        backgroundColor: Colors.lighter,
        width: 300,
        height: '100%',
        zIndex: 1000
    },
    drawTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darker,
        alignItems: 'center'
    },
    promptContainer: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        backgroundColor: Colors.darker,
        padding: 15,
        alignItems: 'center',
    },
    promptText: {
        color: Colors.light,
        fontSize: 16,
    },
    loadingContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    loadingText: {
        color: Colors.light,
        marginTop: 10,
    },
});

export default ChartScreen;
