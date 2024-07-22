// SettingsScreen.js

import React from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SettingsScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
    const [soundEffectsEnabled, setSoundEffectsEnabled] = React.useState(true); // Example state for sound effects
    const [language, setLanguage] = React.useState('English'); // Example state for language
    const [autoUpdateEnabled, setAutoUpdateEnabled] = React.useState(false);
    const [showPreviewEnabled, setShowPreviewEnabled] = React.useState(false);

    const toggleNotifications = () => {
        setNotificationsEnabled(previousState => !previousState);
        // Implement logic to enable/disable notifications
    };

    const toggleDarkMode = () => {
        setDarkModeEnabled(previousState => !previousState);
        // Implement logic to enable/disable dark mode
    };

    const toggleSoundEffects = () => {
        setSoundEffectsEnabled(previousState => !previousState);
        // Implement logic to enable/disable sound effects
    };

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        // Implement logic to change language
    };

    const toggleAutoUpdate = () => {
        setAutoUpdateEnabled(previousState => !previousState);
        // Implement logic to enable/disable auto updates
    };

    const toggleShowPreview = () => {
        setShowPreviewEnabled(previousState => !previousState);
    };

    return (
        <>
            <SafeAreaView style={styles.topBar}>
                <Text style={styles.topBarTitle}>Settings</Text>
            </SafeAreaView>
            <View style={styles.container}>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Enable Notifications</Text>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={toggleNotifications}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <Switch
                        value={darkModeEnabled}
                        onValueChange={toggleDarkMode}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Sound Effects</Text>
                    <Switch
                        value={soundEffectsEnabled}
                        onValueChange={toggleSoundEffects}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Language</Text>
                    <Text>{language}</Text>
                    {/* Placeholder for language selection UI */}
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Auto Update</Text>
                    <Switch
                        value={autoUpdateEnabled}
                        onValueChange={toggleAutoUpdate}
                    />
                </View>

                <View style={styles.logoutBtnContainer}>
                    <TouchableOpacity style={styles.logoutBtn}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        padding: 20,
    },
    topBar: {
        height: 60, // Adjust based on your design needs
        backgroundColor: Colors.primary, // Assuming you have a primary color defined
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white, // Assuming white color for contrast
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    logoutBtnContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: '100%'
    },

    logoutBtn: {
        backgroundColor: Colors.light,
        padding: 20,
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        elevation: 10
    },
    logoutText: {
        color: Colors.dark,
        fontSize: 20,
        fontWeight: 'bold',
    }

});

export default SettingsScreen;
