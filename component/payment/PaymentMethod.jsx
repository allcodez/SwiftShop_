// Menupayment.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Check from '../../assets/svg/Check';
import { theme } from '../../theme';
import RadioButton from '../RadioButton';
import { globalStyle } from '../../globalStyle';
import Wallet from '../../assets/svg/Wallet';
import Global from '../../assets/svg/Global';
import Scanner from '../../assets/svg/Scanner'

const { width, height } = Dimensions.get('window');

const method = [
    {
        id: 1,
        name: 'Smoked Fish',
        icon: <Wallet color={theme.color.primary} />
    },
    {
        id: 2,
        name: 'Boiled Egg',
        icon: <Global color={theme.color.primary} />
    },
    {
        id: 3,
        name: 'Beef',
        icon: <Scanner color={theme.color.primary} />
    },
];

export default function PaymentMethod() {
    return (
        <View style={[globalStyle.detailsContainer, styles.paymentContainer]}>

            {method.map((payment) => (
                <View style={styles.paymentListBox} key={payment.id}>
                    <View style={styles.paymentListContent}>
                        {payment.icon}
                        <Text style={styles.paymentListText}>{payment.name}</Text>
                    </View>
                    <RadioButton
                    //   selected={selectedpaymentId === payment.name}
                    //   onPress={() => handleSelectpayment(payment.name)}
                    />
                </View>
            ))}

        </View>
    );
}

// Styles remain the same


const styles = StyleSheet.create({
    paymentContainer: {
        gap: 35,
        paddingVertical: 40,
    },
    paymentHead: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.7,
    },
    paymentHeadText: {
        fontFamily: theme.font.minimal,
        color: theme.color.lightText,
    },
    paymentCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        backgroundColor: '#D8FF80',
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    paymentList: {
        marginTop: 10,
        gap: 12,
        paddingHorizontal: 20,
        backgroundColor: 'red',
    },
    paymentListBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 25,
        borderRadius: 20,
        gap: 20
    },
    paymentListContent:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    paymentListText: {
        fontFamily: theme.font.styleMedium,
    },
});