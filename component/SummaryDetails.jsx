import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { globalStyle } from '../globalStyle';
import Shop from '../assets/svg/Shop';
import Time from '../assets/svg/Time';
import LocationOutline from '../assets/svg/LocationOutline';
import Delivery from '../assets/svg/Delivery';
import Edit from '../assets/svg/Edit';

import { theme } from '../theme';

const { width, height } = Dimensions.get('window');

// Define repeated items as an array of objects
const repeatedItems = [
  { icon: <Shop color={theme.color.primary} />, title: 'Lilian Cuisine', subtitle: '29 Ikoyi Road, Uyo' },
  { icon: <Time color={theme.color.primary} />, title: 'Order delivery time', subtitle: 'Friday, 20 December, 2023 at 15:30' },
  { icon: <LocationOutline color={theme.color.primary} />, title: 'Delivery address', subtitle: 'Delivery address' },
  { icon: <Delivery color={theme.color.primary} />, title: 'Delivery cost', subtitle: '₦3,000' },
];

export default function SummaryDetails() {
  return (
    <View style={[globalStyle.detailsContainer, styles.detailsContainer]}>
      {/* Map out repeated items */}
      {repeatedItems.map((item, index) => (
        <View key={index} style={styles.detialsContent}>
          {item.icon}
          <View style={styles.detialsText}>
            <Text style={globalStyle.detialsTextBig}>{item.title}</Text>
            <Text style={globalStyle.detialsTextSmall}>{item.subtitle}</Text>
          </View>
          {/* Render Edit icon for specific item if needed */}
          {item.title === 'Delivery address' && (
            <TouchableOpacity>
              <Edit color={theme.color.lightText} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    gap: 30,
  },
  detialsContent: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  detialsText: {
    flex: 1
  }
});
