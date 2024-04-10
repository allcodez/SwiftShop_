import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { globalStyle } from '../../globalStyle';
import ArrowLeft from '../../assets/svg/ArrowLeft'
import Heart from '../../assets/svg/CraveOutline';
import { theme } from '../../theme';
import UserCart from '../../component/UserCart';
import MenuCombo from '../../component/MenuCombo';
import OptionalCombo from '../../component/OptionalCombo';

const { width, height } = Dimensions.get('window')

export default function FoodDetails({ route, navigation }) {

    const { foodDetails } = route.params; // Access foodDetails from route.params
    const [selectedCombo, setSelectedCombo] = useState(null); // State for selected combo
    const [selectedCombo2, setSelectedCombo2] = useState(null); // State for selected optional combo

    const handleComboSelect = (combo) => {
        setSelectedCombo(combo); // Update selected combo state
    };

    const handleComboSelect2 = (comboId) => {
        setSelectedCombo2(comboId); // Update selected optional combo state
    };

    const handleCheckout = () => {
        navigation.goBack();
    };

    

    return (
        <View style={globalStyle.screenContainer}>
            <ScrollView>
                <ImageBackground resizeMode='cover' source={foodDetails.FoodImg} style={globalStyle.resturantHeader}>
                    <View style={globalStyle.headerIcon}>
                        <TouchableOpacity style={globalStyle.headerIconButton} onPress={() => navigation.goBack()}>
                            <ArrowLeft color='white' onPress={() => navigation.goBack()} />
                        </TouchableOpacity>

                        <TouchableOpacity style={globalStyle.headerIconButton}>
                            <Heart color='white' />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.details}>
                    <View style={styles.deatilsContent}>
                        <Text style={styles.deatilsName}>{foodDetails.FoodName}</Text>
                        <View style={styles.deatilsPurch}>
                            <Text style={styles.deatilsInfo}>Cost: </Text>
                            <Text style={styles.deatilsPrice}>{foodDetails.FoodPrice}</Text>
                        </View>
                    </View>

                    <Text style={styles.deatilsDesc}>{foodDetails.FoodDesc}</Text>
                </View>

                <View style={styles.combo}>
                    <MenuCombo onSelectCombo={handleComboSelect} />
                    <OptionalCombo onSelectCombo2={handleComboSelect2} />
                </View>

            </ScrollView>

            <View style={globalStyle.userCartContainer}>
                {/* Add to cart button */}
                <UserCart onAddToCart={handleCheckout} price={foodDetails.FoodPrice} foodDetails={foodDetails} selectedCombo={selectedCombo} selectedCombo2={selectedCombo2} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        gap: 14
    },
    deatilsContent: {
        gap: 6
    },
    deatilsName: {
        fontSize: theme.fontSize.large * 1.4,
        fontFamily: theme.font.styleBold,
    },
    deatilsPurch: {
        flexDirection: 'row'
    },
    deatilsInfo: {
        fontSize: theme.fontSize.medium,
        color: theme.color.lightText
    },
    deatilsPrice: {
        fontSize: theme.fontSize.medium,
    },
    deatilsDesc: {
        fontSize: width * 0.035,
        color: theme.color.lightText,
        fontFamily: theme.font.light,
    },
    combo: {
        gap: 20,
        marginBottom: 150
    }
})