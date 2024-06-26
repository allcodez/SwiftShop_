// MenuCombo.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Check from '../assets/svg/Check';
import { theme } from '../theme';
import RadioButton from './RadioButton';
import { globalStyle } from '../globalStyle';

const comboData = [
  { id: 1, name: 'Smoked Fish' },
  { id: 2, name: 'Boiled Egg' },
  { id: 3, name: 'Beef' },
];

export default function MenuCombo({ onSelectCombo }) {
  const [selectedComboId, setSelectedComboId] = useState(null);

  const handleSelectCombo = (name) => {
    setSelectedComboId(name);
    onSelectCombo(name); // Call the callback function with the selected combo
  };

  return (
    <View style={styles.comboContainer}>
      <View style={styles.comboHead}>
        <Text style={styles.comboHeadText}>Select Combo</Text>
        <View style={styles.comboCheck}>
          <Check color="#61605F" />
          <Text style={styles.comboHeadText}>Required</Text>
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
  );
}

// Styles remain the same


const styles = StyleSheet.create({
  comboContainer: {},
  comboHead: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.7,
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
    fontFamily: theme.font.styleMedium,
  },
});