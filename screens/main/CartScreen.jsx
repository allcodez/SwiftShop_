import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';
import Favourite from '../../assets/svg/Favourite.js'

const { width } = Dimensions.get('window');

// Modify the CraveScreen component to receive craveCategories as props
export default function OrderScreen({ route }) {
    return (
        <View style={globalStyle.screenContainer}>
            <View style={globalStyle.screenPlaceholder}>
                <Image style={[globalStyle.placeholderImage, globalStyle.placeholderImage3]} source={require('../../assets/rafiki3.png')} />
                <View style={globalStyle.placeholderText}>
                    <Text style={globalStyle.placeholderBigText}>There is no favourite yet</Text>
                    <Text style={globalStyle.placeholderSmallText}>Select your favourite restaurants, stores</Text>
                </View>
            </View>
        </View>

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
});

