import { Dimensions, StyleSheet } from 'react-native';
import { theme } from './theme';

const {width, height} = Dimensions.get('window')

export const globalStyle = StyleSheet.create({
    screenContainer: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
    screenContent: {
        // paddingHorizontal: 25,
        // height: height,
        flex: 1,
        paddingVertical: 10,
        // height: height,
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
        fontSize: theme.fontSize.medium,
        color: theme.color.lightText
    },
    contentText:{
        fontFamily: theme.font.styleBold,
        fontSize: theme.fontSize.medium,
        color: '#2b2b2b'
    },
    offerPrice:{
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
        color: theme.color.black
    },
    hText:{
        fontFamily: theme.font.styleBold,
        fontSize: theme.fontSize.large,
    },
	href:{
		alignSelf: 'center'
	},
    screenPlaceholder:{
        // height: height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    placeholderImage:{
        width: '60%',
        height: 200,
    }
})