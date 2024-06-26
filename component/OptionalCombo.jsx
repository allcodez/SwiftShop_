import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Confetti from '../assets/svg/Confetti'
import { theme } from '../theme'
import RadioButton from './RadioButton'
import { globalStyle } from '../globalStyle'

// Define your combo data as a JSON object
const comboData = [
    { id: 1, name: '50cl Coke' },
    { id: 2, name: '50cl Fanta' },
];

export default function OptionalCombo({ onSelectCombo2 }) {

    const [selectedComboId, setSelectedComboId] = useState(null);

    const handleSelectCombo = (name) => {
        setSelectedComboId(name);
        onSelectCombo2(name);
        // Find the combo data based on the selected ID
    };


    return (
        <View style={styles.comboContainer}>
            <View style={styles.comboHead}>
                <Text style={styles.comboHeadText}>Extra</Text>
                <View style={styles.comboCheck}>
                    <Confetti color='#61605F' />
                    <Text style={styles.comboHeadText}>Optional</Text>
                </View>
            </View>


            <View style={styles.comboList}>
                {comboData.map((combo) => (
                    <View style={[styles.comboListBox, globalStyle.shadow]} key={combo.id}>
                        <Text style={styles.comboListText}>{combo.name}</Text>
                        <RadioButton
                            selected={selectedComboId === combo.name}
                            onPress={() => handleSelectCombo(combo.name)}
                        />
                    </View>
                ))}
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
    comboHeadText: {
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
    comboList: {
        marginTop: 10,
        gap: 12,
        paddingHorizontal: 20,
    },
    comboListBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        borderRadius: 20,
    },
    comboListText: {
        fontFamily: theme.font.styleMedium
    }
})