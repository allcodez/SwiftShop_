import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { globalStyle } from '../globalStyle'
import { theme } from '../theme'
import ArrowLeft from '../assets/svg/ArrowLeft'

const { width, height } = Dimensions.get('window')

export default function SummaryMenu() {
    return (
        <View style={[globalStyle.detailsContainer, styles.menuContainer]}>
            <Text style={styles.menuHead}>Your Order</Text>

            <View style={styles.menuContent}>
                <Text style={styles.menuContentList}>•</Text>
                <View style={styles.menuText}>
                    <Text style={globalStyle.detialsTextBig}>Lilian Cuisine</Text>
                    <Text style={globalStyle.detialsTextSmall}>#2,000</Text>
                </View>
            </View>
            <View style={styles.menuContent}>
                <Text style={styles.menuContentList}>•</Text>
                <View style={styles.menuText}>
                    <Text style={globalStyle.detialsTextBig}>Lilian Cuisine</Text>
                    <Text style={globalStyle.detialsTextSmall}>#2,000</Text>
                </View>
            </View>
            <View style={styles.menuContent}>
                <Text style={styles.menuContentList}>•</Text>
                <View style={styles.menuText}>
                    <Text style={globalStyle.detialsTextBig}>Lilian Cuisine</Text>
                    <Text style={globalStyle.detialsTextSmall}>#2,000</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        gap: 15
    },
    menuHead: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.05,
    },
    menuContentList: {
        // fontFamily: theme.font.styleBold,
        fontSize: width * 0.08,
        alignSelf: 'flex-start'
    },
    menuContent: {
        flexDirection: 'row',
        gap: 15,
        // justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})