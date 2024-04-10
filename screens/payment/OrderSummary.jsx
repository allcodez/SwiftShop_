import React from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import { globalStyle } from '../../globalStyle'
import { theme } from '../../theme'
import SummaryMenu from '../../component/SummaryMenu'
import SummaryDetails from '../../component/SummaryDetails'

const { width, height } = Dimensions.get('window')

export default function OrderSummary() {
    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <ScrollView>
                <View style={styles.customHeader}>
                    <ArrowLeft />
                    <Text style={styles.customHeaderText}>Order Summary</Text>
                    <View></View>
                </View>
                <View style={styles.summaryContent}>
                    <View style={styles.summaryDetails}>
                        <SummaryDetails />
                    </View>

                    <View style={styles.summaryDetails}>
                        <SummaryMenu />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    summaryContent: {
        gap: 15,
    },
    customHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    customHeaderText: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.075,
        padding: 20
    },
    summaryDetails: {
        paddingHorizontal: 15,
    }
})