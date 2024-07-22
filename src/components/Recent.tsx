import { View, Text, ScrollView, StyleSheet , TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Recent = () => {
    const [isModal, setIsModal] = useState(false);
    const [recent, setRecent] = useState([
        {
            id: '1',
            title: 'How to create a chatbot',
        },

        {
            id: '2',
            title: 'Job finder UX'
        },

        {
            id: '3',
            title: 'MKU location'
        }
    ]);

    const handleRedirectToRecent = (id: string) => {
        // setIsModal(true);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.recentText}>Recent</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recent.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.recentContainer} onPress={() => handleRedirectToRecent(item.id)}>
                        <Text style={styles.recentTitle}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModal}
                onRequestClose={() => {
                    setIsModal(false);
                }}
                style={styles.modal}
            >
                <Text >clicked</Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    recentText: {
        fontSize: 22,
        color: Colors.lighter,
        fontWeight: 'bold',
        paddingVertical: 10,
    },

    recentContainer: {
        backgroundColor: Colors.light,
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },

    recentTitle: {
        color: Colors.dark,
    },

    modal: {
        backgroundColor: 'red',
    }
})

export default Recent