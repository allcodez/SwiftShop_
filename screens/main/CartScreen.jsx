import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';
import CartItem from '../../component/CartItem.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';
import CartUserAction from '../../component/CartUserAction.jsx';

const { width, height } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartScreenKey, setCartScreenKey] = useState(0); // Add state for the key



    const fetchCartItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('cartItems');
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems).map(item => ({
                    ...item,
                    id: item.id || uuidv4(), // Assign UUID if id doesn't exist
                }));
                setCartItems(parsedItems);
                console.log('Retrieved cart items:', parsedItems);
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

    // Function to remove item from cart
    // Function to remove item from cart
    const handleDeleteItem = async (itemToDelete) => {
        try {
            // Filter out the item to delete from the current state cartItems
            const updatedItems = cartItems.filter(item => item.id !== itemToDelete.id);

            // Update AsyncStorage with the updated items
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedItems));

            // Update the state with the updated items
            setCartItems(updatedItems);

            // Increment the key to force re-render
            setCartScreenKey(prevKey => prevKey + 1);
        } catch (error) {
            console.error('Error removing item from AsyncStorage:', error);
        }
    };


    return (
        <View style={globalStyle.screenContainer}>
            {/* <ScrollView style={styles.cartScreenContainer} key={cartScreenKey}> */}
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
                <View style={styles.cartItemMainContainer}>
                    <ScrollView style={styles.cartItemContainer}>
                        <View style={styles.cartItemContainerContent}>
                            {cartItems.map((item, index) => (
                                <CartItem key={`${item.id}_${index}`} cartItem={item} onDeleteItem={handleDeleteItem} />
                            ))}
                        </View>
                    </ScrollView>
                    <View style={styles.cartActionContainer}>
                        <CartUserAction />
                    </View>
                </View>

            )}
            {/* </ScrollView> */}


        </View>
    );
}

const styles = StyleSheet.create({
    cartItemMainContainer: {
        // backgroundColor: 'green',
        // flex: 1,
        // paddingBottom: 280,
        height: height - 210,
    },
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
    cartItemContainer: {
        padding: 20,
        // backgroundColor: 'yellow'
    },
    cartItemContainerContent:{
        gap: 25,
        paddingBottom: 210,
    },
    cartActionContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        // paddingTop: 20,
        paddingHorizontal: 0,
        // backgroundColor: 'red',
        paddingBottom: 15
    }
});


