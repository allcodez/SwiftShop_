import Recat from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'
import { globalStyle } from '../globalStyle'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')


export default function UserCart({price}) {
    const navigation = useNavigation()

    const handleAddToCart = ()=>{
        navigation.goBack()
    }

    return (
        <View style={styles.userCart}>
            <View style={[globalStyle.outlineDefaultButton, styles.cartQuantity]}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>-</Text>
                </TouchableOpacity>
                <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>1</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={[globalStyle.outlineDefaultButtonText, styles.quantityCartText]}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.cartAdd, globalStyle.solidDefaultButton]} onPress={handleAddToCart}>
                <Text style={[globalStyle.userCartText, globalStyle.solidDefaultButtonText]}>ADD TO CART {price}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    userCart:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    cartQuantity:{
        flexDirection: 'row',
        // gap: 10,
        // paddingVertical: 15,
        // paddingHorizontal: 20,
    },
    quantityCartText:{
        fontSize: width * 0.06
    },
    cartAdd:{
        paddingVertical: 20,
        paddingHorizontal: 45,
    },
    addButton:{
        // backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
})