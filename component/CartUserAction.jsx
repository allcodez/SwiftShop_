import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { globalStyle } from '../globalStyle';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function CartUserAction() {
    const [count, setCount] = useState(0);

    const navigation = useNavigation()

    const handleOrder = () => {
        navigation.push('Payment')
    }

    return (
        <View style={styles.cartActionContainer}>
            <TouchableOpacity onPress={handleOrder} style={[styles.cartOrder, globalStyle.solidButton]}>
                <Text style={[globalStyle.userCartText, globalStyle.solidButtonText]}>PLACE YOUR ORDER</Text>
                <Text style={[globalStyle.userCartText, globalStyle.solidButtonText]}>#2,000</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyle.outlineButton}>
                <Text style={[globalStyle.userCartText, globalStyle.outlineButtonText]}>CANCEL ORDER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cartActionContainer: {
        gap: 10
    },
    cartOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 1.2,
        paddingVertical: 20,
        paddingHorizontal: width / 10,
    }
})