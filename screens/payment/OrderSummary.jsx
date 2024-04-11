import React from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Dimensions, KeyboardAvoidingView } from 'react-native'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import { globalStyle } from '../../globalStyle'
import { theme } from '../../theme'
import SummaryMenu from '../../component/SummaryMenu'
import SummaryDetails from '../../component/SummaryDetails'
import VendorInstruction from '../../component/VendorInstruc'
import RiderInstruction from '../../component/RiderInstruc'

const { width, height } = Dimensions.get('window')

export default function OrderSummary() {
    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView>
                    <View style={styles.customHeader}>
                        <ArrowLeft />
                        <Text style={styles.customHeaderText}>Order Summary</Text>
                        <View></View>
                    </View>

                    <View style={styles.summaryContent}>
                        <View>
                            <SummaryDetails />
                        </View>

                        <View>
                            <SummaryMenu />
                        </View>

                        <View>
                            <VendorInstruction />
                        </View>

                        <View>
                            <RiderInstruction />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    summaryContent: {
        gap: 15,
        paddingHorizontal: 15,
        // marginBottom: 10

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

})