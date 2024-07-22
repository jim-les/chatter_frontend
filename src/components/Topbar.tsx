import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const menu = require('../assets/menu.png');
const setting = require('../assets/setting.png');
import { useNavigation } from '@react-navigation/native';

interface props {
    setToggleDrawer: any,
    toggleDrawer: boolean
}

const Topbar = ({setToggleDrawer, toggleDrawer}: props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={ {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'} }>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setToggleDrawer(true)}>
                    <Image source={menu} style={{width: 30, height: 30}} />
                </TouchableOpacity>

                <Text style={styles.headerText}>Mcharter Welcome</Text>

                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Settings')}>
                    <Image source={setting} style={{width: 30, height: 30}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingVertical: 10,
    },

    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: Colors.light,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    headerText: {
        fontSize: 20,
        color: Colors.lighter,
        fontWeight: 'bold',
    },

    iconText: {
        color: Colors.dark,
        fontSize: 14,
    }
})


export default Topbar