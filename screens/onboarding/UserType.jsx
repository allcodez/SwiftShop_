import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native'

const { width, height } = Dimensions.get('window');

export default function UserType({navigation}) {

    const handleOrder = () => {
        // navigation.replace('OnboardingScreen');
        navigation.push('OnboardingOne');
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.containerBoard}>
                <View style={styles.boardUpper}>
                    <View style={styles.boardText}>
                        <Text style={styles.h1Text}>Use SwiftShop to...</Text>

                        <Text style={styles.pText}>Right on this app, you can order your meals, {'\n'}fruits, etc., and also sign up as a vendor.</Text>
                    </View>

                    <Image source={require('../../assets/userType.png')} style={styles.imageStyle} />
                </View>


                <View style={styles.boardButton}>
                    <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                        <Text style={styles.orderButtonText}>ORDER MEALS AND OTHERS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sellButton}>
                        <Text style={styles.sellButtonText}>SELL AND REACH MORE</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.boardButton}>

                </View> */}

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
        backgroundColor: 'white',
        flex: 0.85, // Adjust the size of the container as needed
        // alignItems: 'flex-start', // Align items to the start (left) of the container
        borderTopStartRadius: 50,
        borderTopEndRadius: 60,
        gap: 20,
    },
    boardUpper: {
        padding: 40,
        gap: 20, 
    },
    boardText: {
        gap: 10,
    },
    h1Text: {
        fontFamily: 'Syne-Bold',
        fontSize: width * 0.07,
    },
    pText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.035,
        opacity: 0.5,
        lineHeight: 20
    },
    boardButton: {
        paddingHorizontal: 5,
        fontStyle: 'uppercase',
        width: '100%',
        gap: 10
        // justifyContent: 'center'
    },
    orderButton: {
        fontFamily: 'Circular-Std-Medium',
        alignSelf: 'center',
        backgroundColor: '#6654E7',
        paddingHorizontal: 55,
        paddingVertical: 20,
        borderRadius: 40,
    },
    sellButton: {
        alignSelf: 'center',
        borderColor: '#6654E7',
        borderWidth: 2, // Fix: Use numeric value for borderWidth
        paddingHorizontal: 70,
        paddingVertical: 20,
        borderRadius: 40,
    },    
    sellButtonText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.04,
        color: '#6654E7'
        // Add your button text styles her
    },
    orderButtonText: {
        fontFamily: 'Circular-Std-Medium',
        fontSize: width * 0.04,
        color: 'white'
        // Add your button text styles her
    },
});
