import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyle } from '../globalStyle';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height } = Dimensions.get('window');

export default function Menu({ menuData }) {

    const navigation = useNavigation()

    const handleAddPress = (item) => {
        // Navigate to FoodDetails screen and pass the food details as params
        navigation.navigate('FoodDetails', { foodDetails: item });
        hideCheckout()
    };

     // Function to clear AsyncStorage
     const hideCheckout = async () => {
        try {
            await AsyncStorage.removeItem('totalPrice');
            console.log('totalPrice cleared successfully.');
        } catch (error) {
            console.error('Error clearing totalPrice:', error);
        }
    };

    return (
        <View style={[styles.menuContainer,globalStyle.shadow]}>
            {menuData.map((item) => (
                <View style={[styles.menuCard]} key={item.id}>
                    <Image resizeMode='cover' style={styles.menuImage} source={item.FoodImg} />
                    <View style={styles.menuDetails}>
                        <View style={styles.menuDetailContent}>
                            <Text style={styles.menuName}>{item.FoodName}</Text>
                            <Text style={styles.menuDescription}>{item.FoodDesc}</Text>
                        </View>
                        <View style={styles.menuDetailContent2}>
                            <Text style={styles.menuPrice}>{item.FoodPrice}</Text>
                            <TouchableOpacity style={[globalStyle.outlineDefaultButton, styles.menuAdd]}
                                onPress={() => handleAddPress(item)}
                            >
                                <Text style={globalStyle.outlineDefaultButtonText}>ADD +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        gap: 25
    },
    menuCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
        borderRadius: 20,
        padding: 15,
    },
    menuImage: {
        width: width * 0.3,
        height: width * 0.32,
        borderRadius: 10,
    },
    menuDetails: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    menuDetailContent: {
        gap: 4
    },
    menuName: {
        fontSize: width * 0.043,
        fontFamily: theme.font.styleBold,
    },
    menuDescription: {
        fontSize: width * 0.035,
        color: '#666',
        fontFamily: theme.font.light,
    },
    menuDetailContent2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    menuPrice: {
        fontSize: width * 0.04,
        fontFamily: theme.font.bold,
    },
    menuButton: {
        backgroundColor: '#009688',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    menuButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    menuAdd:{
        paddingVertical: 10,
        paddingHorizontal: 18,
    }
});
