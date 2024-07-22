import { View, Text, ScrollView, StyleSheet , TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import chatbot from '../assets/chatbot.png'

interface chartProps {
    item: {
        id: string,
        threadTitle: string,
        user: string,
        request: string,
        time: string,
    }
}

const ChartuserWidget = ({item}: chartProps) => {
    return (
        <View style={styles.container}>
            {/* flex between with copy */}
            <View style={ {flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'} }>
                <Text style={styles.chartText}>
                    {item.request}
                </Text>

                <View style={{width: 40, height: 40, borderRadius: 100, backgroundColor: Colors.darker, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                    <Text style={{color: Colors.lighter, fontWeight: 'bold'}}>JL</Text>
                </View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.light,
        width: '100%',
        borderRadius: 20,
        minHeight: 50,
        padding: 10,
        marginVertical: 10,
    },

    chartText: {
        color: Colors.light,
        fontSize: 16,
    },
})

export default ChartuserWidget