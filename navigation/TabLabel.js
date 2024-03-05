import React from 'react';
import { Text } from 'react-native';

// CustomTabLabel component to style tab label with custom font
const CustomTabLabel = ({ focused, label, fontFamily, color }) => {
    return (
        <Text style={{ fontFamily: fontFamily, color: color, fontWeight: focused ? 'bold' : 'normal' }}>
            {label}
        </Text>
    );
};

export default CustomTabLabel;
