import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { globalStyle } from '../globalStyle';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function UserCart({ price, onAddToCart, foodDetails, selectedCombo, selectedCombo2 }) {
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    // useEffect(() => {
    //     const fetchQuantity = async () => {
    //         try {
    //             const cartQuantity = await AsyncStorage.getItem('cartQuantity');
    //             if (cartQuantity) {
    //                 setQuantity(parseInt(cartQuantity, 10));
    //             }
    //         } catch (error) {
    //             console.error('Error retrieving cart quantity:', error);
    //         }
    //     };

    //     fetchQuantity();
    // }, []);

    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''));

    const handleAddToCart = async () => {
        const totalPrice = quantity * numericPrice;

        const newItem = {
            FoodImg: foodDetails.FoodImg,
            FoodName: foodDetails.FoodName,
            FoodPrice: foodDetails.FoodPrice,
            FoodCombo1: selectedCombo,
            FoodCombo2: selectedCombo2,
            FoodQuantity: quantity,
            TotalPrice: totalPrice, // Save the total price to AsyncStorage
        };

        try {
            await saveToAsyncStorage(quantity, totalPrice);

            const existingItems = await AsyncStorage.getItem('cartItems');
            const cartItems = existingItems ? JSON.parse(existingItems) : [];
            cartItems.push(newItem);
            await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));

            console.log('Cart item added:', JSON.stringify(cartItems));
            console.log('Item added to cart successfully.');
            onAddToCart();
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const saveToAsyncStorage = async (quantity, totalPrice) => {
        try {
            // await AsyncStorage.setItem('cartQuantity', quantity.toString());
            await AsyncStorage.setItem('totalPrice', totalPrice.toString());
            console.log('Data saved to AsyncStorage successfully.');
        } catch (error) {
            console.error('Error saving data to AsyncStorage:', error);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <View style={styles.userCart}>
            <View style={[globalStyle.outlineDefaultButton, styles.cartQuantity]}>
                <TouchableOpacity style={styles.addButton} onPress={decrementQuantity}>
                    <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>-</Text>
                </TouchableOpacity>
                <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>{quantity}</Text>
                <TouchableOpacity style={styles.addButton} onPress={incrementQuantity}>
                    <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.cartAdd, globalStyle.solidDefaultButton]} onPress={handleAddToCart}>
                <Text style={[globalStyle.userCartText, globalStyle.solidDefaultButtonText]}>
                    ADD TO CART ₦{quantity * numericPrice}
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    userCart: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    cartQuantity: {
        flexDirection: 'row',
    },
    quantityCartText: {
        fontSize: width * 0.06
    },
    cartAdd: {
        paddingVertical: 20,
        paddingHorizontal: 45,
    },
    addButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
});
