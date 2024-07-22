import { View, Text, ScrollView, StyleSheet , TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Automation = () => {
    // list of automations to be displayed (icon, text)
    const [automationGenerated, setAutomationGenerated] = useState([
        {
            id: '1',
            title: 'Remembers what the user said earlier in the conversation',
        },

        {
            id: '2',
            title: 'Provides personalized responses based on user input'
        },

        {
            id: '3',
            title: 'Continuously learns and improves over time'
        }
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.automationText}>Automation</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {automationGenerated.map((item) => (
                    <View key={item.id} style={styles.automationContainer}>
                        <Text style={styles.automationTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.automationContainerBtn}>
                            <Text style={{color: Colors.light}}>Generate</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    automationText: {
        fontSize: 22,
        color: Colors.lighter,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    automationContainer: {
        backgroundColor: Colors.lighter,
        padding: 14,
        borderRadius: 20,
        marginRight: 10,
        width: 250,
    },

    automationTitle: {
        color: Colors.darker,
        fontSize: 22,
    },

    automationContainerBtn: {
        backgroundColor: Colors.darker,
        padding: 10,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 10,
        alignItems: 'center',
    }



})

export default Automation