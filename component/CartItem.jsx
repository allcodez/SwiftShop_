import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyle } from '../globalStyle';
import { theme } from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function CartItem({ cartItem }) {
    // Render the cart item
    return (
        <View style={[styles.cartItemContainer, globalStyle.shadow]}>
            <View style={styles.cartItemCard}>
                <View style={styles.cartMainItem}>
                    <Image resizeMode='cover' style={styles.cartItemImage} source={cartItem.FoodImg} />
                    <Text style={styles.cartItemPrice}>{cartItem.FoodPrice}</Text>
                </View>

                <View style={styles.cartItemDetailContent2}>
                    <View style={styles.cartItemDetails}>
                        <View style={styles.cartItemDetailContent}>
                            <Text style={styles.cartItemName}>{cartItem.FoodName}</Text>
                            {/* combo list */}
                            {cartItem.FoodCombo1 && (
                                <Text style={styles.bulletPoint}>• {cartItem.FoodCombo1}</Text>
                            )}
                            {cartItem.FoodCombo2 && (
                                <Text style={styles.bulletPoint}>• {cartItem.FoodCombo2}</Text>
                            )}
                        </View>
                    </View>
                    {/* Add to Cart button */}
                    <View style={[globalStyle.outlineDefaultButton, styles.cartItemQuantity]}>
                        <TouchableOpacity style={styles.cartItemAdd}>
                            <Text style={[globalStyle.outlineDefaultButtonText, styles.cartItemQuantityText]}>-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={[globalStyle.outlineDefaultButtonText, styles.cartItemQuantityText]}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cartItemAdd}>
                            <Text style={[globalStyle.outlineDefaultButtonText, styles.cartItemQuantityText]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View></View>
        </View>
    );
}


const styles = StyleSheet.create({
    cartItemContainer: {
        gap: 25
    },
    cartItemCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
        borderRadius: 20,
        padding: 15,
        gap: 10
    },
    cartMainItem: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartItemImage: {
        width: width * 0.25,
        height: width * 0.27,
        borderRadius: 10,
    },
    cartItemDetails: {
        gap: 5,
        alignSelf: 'flex-start'
    },
    cartItemDetailContent: {
        gap: 4
    },
    cartItemName: {
        fontSize: width * 0.043,
        fontFamily: theme.font.styleBold,
    },
    cartItemDescription: {
        fontSize: width * 0.035,
        color: '#666',
        fontFamily: theme.font.light,
    },
    cartItemDetailContent2: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cartItemPrice: {
        fontSize: width * 0.04,
        fontFamily: theme.font.bold,
    },
    cartItemQuantity: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    cartItemQuantityText: {
        fontSize: width * 0.06
    },
    cartItemAdd: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

});
