import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native'

const { width, height } = Dimensions.get('window');

export default function UserType() {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.containerBoard}>
                <View style={styles.boardText}>
                    <Text style={styles.h1Text}>Use SwiftShop to...</Text>

                    <Text style={styles.pText}>Right on this app, you can order your meals, {'\n'}fruits, etc., and also sign up as a vendor.</Text>
                </View>

                <Image source={require('../../assets/userType.png')} style={styles.imageStyle} />


                <View style={styles.boardButton}>
                    <TouchableOpacity style={styles.orderButton}>
                        <Text style={styles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sellButton}>
                        <Text style={styles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#6654E7',
        flex: 1,
        justifyContent: 'flex-end', // Align items to the bottom of the screen
    },
    containerBoard: {
        padding: 40,
        backgroundColor: 'white',
        flex: 0.8, // Adjust the size of the container as needed
        alignItems: 'flex-start', // Align items to the start (left) of the container
        borderTopStartRadius: 50,
        borderTopEndRadius: 60,
    },
    boardText:{
        gap: 10,
    },
    h1Text:{
        fontFamily: 'Syne-Bold',
        fontSize: width * 0.07,
    },
    pText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.035,
        opacity: 0.5,
        lineHeight: 21
    },
    // boardButton: {
    //     width: 100%
    // },
    orderButton: {
        alignSelf: 'center',
        backgroundColor: '#6654E7',
        paddingHorizontal: 85,
        paddingVertical: 20,
        borderRadius: 40,
    },
    buttonText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.04,
        color: 'white'
        // Add your button text styles her
    },
});
