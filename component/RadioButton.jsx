import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../theme';

const RadioButton = () => {
  const [selected, setSelected] = useState(false);
  const [radioOnclcik, setRadioOnclcik] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    setRadioOnclcik(!radioOnclcik)
  };

  return (
    <TouchableOpacity style={[styles.radio, radioOnclcik && styles.radioOnclcik]} onPress={handlePress}>
      <View style={[styles.radioOnclcik, selected && styles.selected]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8C9196',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioOnclcik:{
    borderColor: theme.color.primary,
  },
  selected: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: theme.color.primary,
  },
});

export default RadioButton;
