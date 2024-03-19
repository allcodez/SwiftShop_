import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Check from '../assets/svg/Check'
import { theme } from '../theme'
import RadioButton from './RadioButton'
import { globalStyle } from '../globalStyle'

export default function MenuCombo() {
    return (
        <View style={styles.comboContainer}>
            <View style={styles.comboHead}>
                <Text style={styles.comboHeadText}>Select Combo</Text>
                <View style={styles.comboCheck}>
                    <Check color='#61605F'/>
                    <Text style={styles.comboHeadText}>Required</Text>
                </View>
            </View>

            <View style={styles.comboList}>
                <View style={[styles.comboListBox, globalStyle.shadow]}>
                    <Text style={styles.comboListText}>Smoked Fish</Text>
                    <RadioButton/>
                </View>
                <View style={[styles.comboListBox, globalStyle.shadow]}>
                    <Text style={styles.comboListText}>Boiled Egg</Text>
                    <RadioButton/>
                </View>
                <View style={[styles.comboListBox, globalStyle.shadow]}>
                    <Text style={styles.comboListText}>Beef</Text>
                    <RadioButton/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    comboContainer: {
        // paddingHorizontal: 30,

    },
    comboHead: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.7
    },
    comboHeadText:{
        fontFamily: theme.font.minimal,
        color: theme.color.lightText,
    },
    comboCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        backgroundColor: '#D8FF80',
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    comboList:{
        marginTop: 10,
        gap: 12,
        paddingHorizontal: 20,
    },
    comboListBox:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        borderRadius: 20,
    },
    comboListText:{
        fontFamily: theme.font.styleMedium
    }
})