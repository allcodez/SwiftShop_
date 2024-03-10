import React from 'react'
import { Dimensions, StyleSheet, View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import { theme } from '../../theme'
import {globalStyle} from '../../globalStyle.js'


const { width, height } = Dimensions.get('window')


export default function OnboardingOne({ navigation }) {

    const handleContinue = () => {
        navigation.push('SignUp')
    }

    return (
        <ImageBackground source={require('../../assets/onboarding3.jpeg')} style={styles.backgroundImage}>
            <View style={styles.screenContainer}>
                <Text style={styles.skip}>Skip</Text>
                <View style={styles.containerBoard}>
                    <View style={styles.boardText}>
                        <Text style={styles.h1Text}>Just For You </Text>
                        <Text style={styles.pText}>It is everything about you, loved ones and family.
Get your meals, medications, fruits, dessert.</Text>
                    </View>

                    <View style={styles.slider}>
                        <View style={styles.sliderObject}></View>
                        <View style={styles.sliderObject}></View>
                        <View style={styles.sliderActiveObject}></View>
                    </View>

                    <TouchableOpacity style={globalStyle.solidButton} onPress={handleContinue}>
                        <Text style={globalStyle.solidButtonText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // height: '100%',
        resizeMode: 'cover', // or 'stretch' depending on your preference
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginTopTop: 200
        // backgroundColor: 'red',
    },
    skip: {
        // alignSelf: 'flex-start',
        color: theme.color.secondary,
        paddingTop: 70,
        paddingRight: 30,
        alignSelf: 'flex-end',
        // backgroundColor: 'red',
        fontSize: theme.fontSize.medium,
        fontFamily: theme.font.minimal
        
    },
    containerBoard: {
        flex: 0.45,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        // alignItems: 'f'
    },
    boardText: {
        paddingHorizontal: 40,
        
    },
    h1Text: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.07,
    },
    pText:{
        fontFamily: theme.font.minimal,
        fontSize: width * 0.035,
        opacity: 0.5,
        lineHeight: 20
    },
    slider: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        // backgroundColor: 'red',
    },
    sliderActiveObject: {
        backgroundColor: theme.color.primary,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
    },
    sliderObject:{ 
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
    },
    boardButton: {
        backgroundColor: theme.color.primary,
        fontFamily: 'Circular-Std-Medium',
        alignSelf: 'center',
        paddingHorizontal: 55,
        paddingVertical: 20,
        borderRadius: 40,
        color: 'white'
    },
    buttonText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.04,
        color: 'white',
        paddingHorizontal: 40,
    }
})


// const styles = newFunction()
// function newFunction() {
//     return StyleSheet.create({
//         backgroundImage: {
//             flex: 1,
//             resizeMode: 'cover', // or 'stretch' depending on your preference
//         },
//         screenContainer: {
//             flex: 1,
//         },
//     })
// }