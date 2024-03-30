import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';
import CartItem from '../../component/CartItem.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('cartItems');
            if (storedItems) {
                setCartItems(JSON.parse(storedItems));
                console.log('Retrieved cart items:', JSON.parse(storedItems));
            } else {
                console.log('No cart items found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error retrieving cart items:', error);
        }
    };

    // Fetch cart items when the screen gains focus
    useFocusEffect(
        useCallback(() => {
            fetchCartItems();
        }, [])
    );

    return (
        <ScrollView style={globalStyle.screenContainer}>
                {/* Conditionally render the placeholder or cart items */}
                {cartItems.length === 0 ? (
                    <View style={globalStyle.screenPlaceholder}>
                        <Image style={[globalStyle.placeholderImage, globalStyle.placeholderImage3]} source={require('../../assets/rafiki3.png')} />
                        <View style={globalStyle.placeholderText}>
                            <Text style={globalStyle.placeholderBigText}>There is no favourite yet</Text>
                            <Text style={globalStyle.placeholderSmallText}>Select your favourite restaurants, stores</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.cartItemContainer}>
                        {cartItems.map((item, index) => (
                            <CartItem key={index} cartItem={item} />
                        ))}
                    </View>
                )}
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    categoryButton: {
        justifyContent: 'center',
        width: width / 2,
        alignItems: 'center',
        paddingVertical: 20,
    },
    categoryActive: {
        borderBottomColor: theme.color.primary,
        borderBottomWidth: 2,
    },
    categoryActiveText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
    },
    categoryInactive: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
    },
    categoryInactiveText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
        color: 'grey',
    },
    cartItemContainer:{
        padding: 20,
        gap: 25
    }
});


