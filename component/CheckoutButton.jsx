import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { globalStyle } from '../globalStyle'
import { useNavigation } from '@react-navigation/native'

export default function CheckoutButton({ navigation, price }) {
    // const navigation = useNavigation()

    const handleCkeckout = () => {
        navigation.navigate('Cart')
    }

    return (
        <TouchableOpacity onPress={handleCkeckout} style={[globalStyle.solidButton]}>
            {/* <Text style={globalStyle.solidButtonText}>PROCEED TO CHECKOUT</Text> */}
            <Text style={globalStyle.solidButtonText}>{price ? price : '₦0.00'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // userProceed:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    // }
})