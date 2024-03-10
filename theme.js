import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const theme = {
    color: {
        primary: '#6654E7',
        secondary: '#D8FF80',
        background: '#3B2E98',
        darkText: '#202223',
        lightText: '#6D7175',
        labelText: '#000000b3',
        white: '#ffffff',
        black: '#000000'
    },
    fontSize: {
        // small: width * 0.037, // Adjust the multiplier as needed
        medium: width * 0.039 ,
        large: width * 0.055,
    },
    font: {
        minimal: 'CircularStd-Regular',
        styleBold: 'Syne-Bold',
        styleRegular: 'Syne-Regular',
        styleMedium: 'Syne-Medium'
    }
};
