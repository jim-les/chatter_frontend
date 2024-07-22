import { View, Text, ScrollView, StyleSheet , TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import chatbot from '../assets/chatbot.png'

interface chartProps {
    item: {
        id: string,
        threadTitle: string,
        user: string,
        reply: string,
        time: string,
    }
}

const ChartBotWidget = ({item}: chartProps) => {
    return (
        <View style={styles.container}>
            {/* flex between with copy */}
            <View style={ {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'} }>
                <Image source={chatbot} style={{width: 40, height: 40, borderRadius: 20}} />
            </View>

            <View>
                <Text style={styles.chartText}>
                    {item.reply}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        width: '100%',
        borderRadius: 20,
        minHeight: 100,
        padding: 20,
        marginVertical: 10,
    },

    chartText: {
        color: Colors.dark,
        fontSize: 16,
    },
})

export default ChartBotWidget