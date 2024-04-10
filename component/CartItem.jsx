import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyle } from '../globalStyle';
import { theme } from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Trash from '../assets/svg/Trash.js';
import Copy from '../assets/svg/Copy.js';
import Edit from '../assets/svg/Edit.js';

const { width, height } = Dimensions.get('window');

export default function CartItem({ cartItem, remountCartScreen, onDeleteItem }) {
    // Handler for deleting the item
    

    // // Use useEffect to trigger remountCartScreen when the component unmounts
    // useEffect(() => {
    //     return () => {
    //         remountCartScreen();
    //     };
    // }, []);


    // Handler for duplicating the item
    const handleDuplicateItem = async () => {
        // Implement duplication logic here
        console.log('Duplicating item:', cartItem);
    };


    // Render the cart item
    return (
        <View style={[styles.cartItemContainer, globalStyle.shadow]}>
            <View style={styles.cartItemCard}>

                <View style={styles.cartMainItem}>
                    <Image resizeMode='cover' style={styles.cartItemImage} source={cartItem.FoodImg} />
                    <Text style={styles.cartItemPrice}>{cartItem.FoodPrice}</Text>
                </View>

                <View style={styles.cartItemDetailContent2}>
                    <View style={styles.cartItemEdit}>
                        <Edit color={theme.color.lightText} />
                    </View>
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
            <View style={styles.cartItemBottom}>
                {/* DUPLICATE ITEM */}
                <TouchableOpacity style={styles.cartItemBottomContent} onPress={handleDuplicateItem}>
                    <Copy color='#6654E7' />
                    <Text style={styles.cartItemBottomContentText}>Duplicate</Text>
                </TouchableOpacity>

                {/* Delete item */}
                <TouchableOpacity style={styles.cartItemBottomContent} onPress={() => onDeleteItem(cartItem)}>
                    <Trash color='#6654E7' />
                    <Text style={styles.cartItemBottomContentText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    cartItemContainer: {
        gap: 15
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
        // backgroundColor: 'red',
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
    },
    cartItemEdit: {
        position: 'absolute',
        right: 0,
        top: 2
    },
    cartItemBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
    },
    cartItemBottomContent: {
        flexDirection: 'row',
    },
    cartItemBottomContentText: {
        color: theme.color.primary,
        fontFamily: theme.font.minimal
    }

});
