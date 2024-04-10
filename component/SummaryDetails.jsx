import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { globalStyle } from '../globalStyle'
import ArrowLeft from '../assets/svg/ArrowLeft'

import { theme } from '../theme'

const { width, height } = Dimensions.get('window')

export default function SummaryDetails() {
    return (
        <View style={[globalStyle.detailsContainer, styles.detailsContainer]}>
            <View style={styles.detialsContent}>
                <ArrowLeft />
                <View style={styles.detialsText}>
                    <Text style={globalStyle.detialsTextBig}>Lilian Cuisine</Text>
                    <Text style={globalStyle.detialsTextSmall}>29 Ikoyi Road, Uyo</Text>
                </View>
            </View>
            <View style={styles.detialsContent}>
                <ArrowLeft />
                <View style={styles.detialsText}>
                    <Text style={globalStyle.detialsTextBig}>Order delivery time</Text>
                    <Text style={globalStyle.detialsTextSmall}>Friday, 20 December, 2023 at 15:30</Text>
                </View>
            </View>
            <View style={styles.detialsContent}>
                <ArrowLeft />
                <View style={styles.detialsText}>
                    <Text style={globalStyle.detialsTextBig}>Delivery address</Text>
                    <Text style={globalStyle.detialsTextSmall}>Delivery address</Text>
                </View>
            </View>
            <View style={styles.detialsContent}>
                <ArrowLeft />
                <View style={styles.detialsText}>
                    <Text style={globalStyle.detialsTextBig}>Delivery cost</Text>
                    <Text style={globalStyle.detialsTextSmall}>₦3,000</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer:{
        gap: 20,
    },
    detialsContent:{
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    }
})