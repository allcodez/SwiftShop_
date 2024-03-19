import { Dimensions, StyleSheet } from 'react-native';
import { theme } from './theme';

const { width, height } = Dimensions.get('window')

export const globalStyle = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    screenContent: {
        // paddingHorizontal: 25,
        // height: height,
        // flex: 1,
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
    solidDefaultButton:{
        backgroundColor: theme.color.primary,
        fontFamily: theme.font.minimal,
        alignSelf: 'center',
        borderRadius: 40,
        alignItems: 'center',
    },
    solidButtonText: {
        fontFamily: theme.font.minimal,
        color: 'white',
        fontSize: width * 0.034,
    },
    solidDefaultButtonText: {
        fontFamily: theme.font.minimal,
        color: 'white',
        // fontSize: width * 0.034,
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
    outlineDefaultButton:{
        alignSelf: 'center',
        borderColor: theme.color.primary,
        fontFamily: theme.font.minimal,
        borderWidth: 1,      
        borderRadius: 40,
        alignItems: 'center',
    },
    outlineButtonText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.034,
        color: theme.color.primary
    },
    outlineDefaultButtonText:{
        fontFamily: theme.font.bold,
        fontSize: width * 0.034,
        color: theme.color.primary
    },
    pText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
        color: theme.color.lightText
    },
    contentText: {
        fontFamily: theme.font.styleBold,
        fontSize: theme.fontSize.medium,
        color: '#2b2b2b'
    },
    offerPrice: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
        color: theme.color.black
    },
    hText: {
        fontFamily: theme.font.styleBold,
        fontSize: theme.fontSize.large,
    },
    href: {
        alignSelf: 'center'
    },
    screenPlaceholder: {
        // height: height,
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
        // backgroundColor: 'red'
    },
    placeholderImage: {
        width: '50%',
        height: height * 0.17,
    },
    placeholderImage3: {
        width: '50%',
        height: height * 0.2,
    },
    placeholderText: {
        alignItems: 'center',
        gap: 5
    },
    placeholderBigText: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.038
    },
    placeholderSmallText: {
        fontFamily: theme.font.minimal,
        color: 'grey'
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -4, height: 1 },
        shadowOpacity: 0.13,
        shadowRadius: 10,
    },
    resturantHeader: {
        height: height * 0.24,
        backgroundColor: 'red',
        paddingVertical: 50,
        paddingHorizontal: 25,
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F680',
        borderRadius: 100,
        padding: 5,
    },
    userCartContainer:{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: width,
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 35
    },
    userCartText:{
        fontSize: width * 0.04
    }
})