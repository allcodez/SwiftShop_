import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { globalStyle } from '../globalStyle'
import { useNavigation } from '@react-navigation/native'

export default function CheckoutButton({ navigation }) {
    // const navigation = useNavigation()

    const handleCkeckout = () => {
        navigation.navigate('Cart')
    }

    return (
        <TouchableOpacity onPress={handleCkeckout} style={globalStyle.solidButton}>
            <Text style={globalStyle.solidButtonText}>PROCEED TO CHECKOUT</Text>
        </TouchableOpacity>
    )
}