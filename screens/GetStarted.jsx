import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import {globalStyle} from '../globalStyle.js'
const { width, height } = Dimensions.get('window');

export default function GetStarted({ navigation }) {
    // Preload images in your entry point or loading screen
    const img2Source = require('../assets/img2.png');
    const logoWhiteSource = require('../assets/logoWhite.png');

    Image.prefetch(Image.resolveAssetSource(img2Source).uri);
    Image.prefetch(Image.resolveAssetSource(logoWhiteSource).uri);

    const handleGetStarted = () => {
        // navigation.replace('OnboardingScreen');
        // navigation.push('UserType');
        navigation.push('Login');
    }

    // const [loaded] = useFonts({
    //     Syne: require('../assets/fonts/Syne'),
    // });

    // if (!loaded) {
    //     return null; // Render a loading indicator while the font is being loaded
    // }

    return (
        <View style={styles.screenContainer}>
            <ImageBackground
                source={img2Source}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Image
                        style={styles.logo}
                        source={logoWhiteSource}
                    />
                    <TouchableOpacity style={[styles.getStartedButton, globalStyle.solidButton]} onPress={handleGetStarted}>
                        <Text style={globalStyle.solidButtonText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        backgroundColor: '#d8f792',
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    overlay: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // Align to the bottom
    },
    logo: {
        width: '70%',
        height: 50,
    },
    getStartedButton: {
        position: 'absolute',
        bottom: 60, // Adjust as needed
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.04,
        color: 'white'
        // Add your button text styles her
    },
});
