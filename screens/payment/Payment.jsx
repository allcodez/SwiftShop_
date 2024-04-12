import React from 'react'
import { View, ScrollView, StyleSheet, Text, SafeAreaView, Dimensions, KeyboardAvoidingView } from 'react-native'
import ArrowLeft from '../../assets/svg/ArrowLeft'
import { globalStyle } from '../../globalStyle'
import { theme } from '../../theme'
import Coupon from '../../component/payment/Coupon'
import PaymentMethod from '../../component/payment/PaymentMethod'


const { width, height } = Dimensions.get('window')

export default function Payment() {
    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView>
                    <View style={styles.customHeader}>
                        <ArrowLeft />
                        <Text style={styles.customHeaderText}>Payment</Text>
                        <View></View>
                    </View>

                    <View style={styles.paymentContent}>
                        <View>
                            <Coupon />
                        </View>

                        <View>
                            <PaymentMethod />
                        </View>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    paymentContent: {
        gap: 15,
        paddingHorizontal: 15,
    }
})