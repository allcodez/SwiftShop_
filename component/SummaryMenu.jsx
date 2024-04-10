import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { globalStyle } from '../globalStyle'
import { theme } from '../theme'
import ArrowLeft from '../assets/svg/ArrowLeft'


const { width, height } = Dimensions.get('window')

export default function SummaryMenu() {
    return (
        <View style={[globalStyle.detailsContainer]}>
            <Text>Your Order</Text>
            <View style={styles.detialsContent}>
                <ArrowLeft />
                <View style={styles.detialsText}>
                    <Text style={globalStyle.detialsTextBig}>Lilian Cuisine</Text>
                    <Text style={globalStyle.detialsTextSmall}>29 Ikoyi Road, Uyo</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})