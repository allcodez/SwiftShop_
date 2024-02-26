import { Dimensions, StyleSheet } from 'react-native';
import { theme } from './theme';

const {width, height} = Dimensions.get('window')

export const globalStyle = StyleSheet.create({
    screenContainer: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
    input: {
		padding: 20,
		borderWidth: 1,
		borderColor: '#E6E6E6',
		backgroundColor: '#F2F2F2',
		borderRadius: 50
	},
    label: {
		gap: 15
	},
	labelText: {
        fontFamily: theme.font.minimal,
		fontSize: width * 0.039,
		color: theme.color.labelText,
    },
	solidButton: {
        backgroundColor: theme.color.primary,
        fontFamily: theme.font.minimal,
        alignSelf: 'center',
        width: width / 1.25,
        paddingVertical: 25,
        borderRadius: 40,
        alignItems: 'center',
    },
    solidButtonText: {
        fontFamily: theme.font.minimal,
        color: 'white',
        fontSize: width * 0.034,
    },
	outlineButton: {
		alignSelf: 'center',
        borderColor: theme.color.primary,
        fontFamily: theme.font.minimal,
        borderWidth: 1,
        width: width / 1.25,
        paddingVertical: 25,
        borderRadius: 40,
        alignItems: 'center',
    },
    outlineButtonText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.034,
        color: theme.color.primary
    },
	pText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.039,
        color: theme.color.lightText
    },
	href:{
		alignSelf: 'center'
	}
})