// RadioButton.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function RadioButton ({ selected, onPress }) {
  return (
    <TouchableOpacity style={[styles.radio, selected && styles.radioSelected]} onPress={onPress}>
      {selected && <View style={styles.selected} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8C9196',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: theme.color.primary,
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: theme.color.primary,
  },
});