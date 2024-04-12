import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { globalStyle } from '../../globalStyle'
import Ticket from '../../assets/svg/Ticket'
import ArrowDown from '../../assets/svg/ArrowDown'
import ArrowUp from '../../assets/svg/ArrowUp'
import { theme } from '../../theme'

const { width, height } = Dimensions.get('window')


export default function Coupon() {
    return (
        <View style={[globalStyle.detailsContainer, styles.couponContainer]}>
            <View style={styles.couponContainerContent}>
                <Ticket color={theme.color.primary} />
                <View style={styles.couponContainerText}>
                    <Text style={styles.couponText}>Use Coupon</Text>
                    <View style={styles.couponTag}>
                        <Text style={styles.couponTagText}>Free ₦1,000</Text>
                    </View>
                </View>
            </View>
            <ArrowDown />
        </View>
    )
}

const styles = StyleSheet.create({
    couponContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    couponContainerContent:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    couponText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium
    },
    couponContainerText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    couponTag: {
        backgroundColor: theme.color.secondary,
        padding: 5,
    },
    couponTagText: {
        fontFamily: theme.font.minimal,
        color: theme.color.primary,
        fontSize: width * 0.027,
    }
})