import React, { useState, useEffect, createContext, useContext } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { globalStyle } from '../../globalStyle';
import ArrowLeft from '../../assets/svg/ArrowLeft'
import Share from '../../assets/svg/Share';
import Heart from '../../assets/svg/CraveOutline';
import Search from '../../assets/svg/SearchOutline';
import Verified from '../../assets/svg/Verified';
import Location from '../../assets/svg/Location';
import Flame from '../../assets/svg/Flame';
import restaurantCoverImg from '../../assets/b4a751ee8b587aee183d79741feb8db1.jpeg';
import restaurantProfileImg from '../../assets/900c75975ba1151037d562e93cc69de6.jpeg';
import { theme } from '../../theme';
import CategoryFilter from '../../component/CategoryFilter';
import Menu from '../../component/Menu'
import CheckoutButton from '../../component/CheckoutButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
;

const { width, height } = Dimensions.get('window')

const filterData = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Rice' },
    { id: 3, label: 'Spaghetti' },
    { id: 4, label: 'Soup' },
    { id: 5, label: 'Plantain' }
];

const menuData = [
    {
        id: 1,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Jollof Rice',
        FoodDesc: 'Tasty jollof rice, smoked fish, boiled egg and beef.',
        FoodPrice: '₦2,500'
    },
    {
        id: 2,
        FoodImg: require('../../assets/0c8fa663d5d833ec3c7b480c43f6857a.jpeg'),
        FoodName: 'Margherita Pizza',
        FoodDesc: 'Pizza topped with tomato sauce, mozzarella, and basil',
        FoodPrice: '₦2,000'
    },
    {
        id: 3,
        FoodImg: require('../../assets/52a4490406d17af1562c0763aa90d092.jpeg'),
        FoodName: 'Chicken Tikka Masala',
        FoodDesc: 'Grilled chicken in a creamy tomato sauce',
        FoodPrice: '₦1,500'
    },
    {
        id: 4,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Caesar Salad',
        FoodDesc: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
        FoodPrice: '₦2,500'
    },
    {
        id: 5,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Caesar Salad',
        FoodDesc: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
        FoodPrice: '₦2,500'
    },
    {
        id: 6,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Caesar Salad',
        FoodDesc: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
        FoodPrice: '₦2,500'
    },
    {
        id: 7,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Caesar Salad',
        FoodDesc: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
        FoodPrice: '₦2,500'
    },
    {
        id: 8,
        FoodImg: require('../../assets/5e9471205f2515d60220551adb862d60.jpeg'),
        FoodName: 'Caesar Salad',
        FoodDesc: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
        FoodPrice: '₦2,500'
    }
];

export default function Restaurant({ navigation }) {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showCheckout, setShowCheckout] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const checkAsyncStorage = async () => {
                try {
                    const cartQuantity = await AsyncStorage.getItem('cartQuantity');
                    const totalPrice = await AsyncStorage.getItem('totalPrice');
                    console.log('Cart Quantity:', cartQuantity);
                    console.log('Total Price:', totalPrice);
                    setShowCheckout(cartQuantity && totalPrice);
                } catch (error) {
                    console.error('Error reading data from AsyncStorage:', error);
                }
            };
    
            checkAsyncStorage();
    
            return () => {
                // Cleanup function
            };
        }, [])
    );   

    const checkAsyncStorage = async () => {
        try {
            const cartQuantity = await AsyncStorage.getItem('cartQuantity');
            const totalPrice = await AsyncStorage.getItem('totalPrice');
            console.log('Cart Quantity:', cartQuantity);
            console.log('Total Price:', totalPrice);
            if (cartQuantity && totalPrice) {
                console.log('Setting showCheckout to true');
                setShowCheckout(true);
            } else {
                console.log('Setting showCheckout to false');
                setShowCheckout(false);
            }
        } catch (error) {
            console.error('Error reading data from AsyncStorage:', error);
        }
    };

    console.log('showCheckout:', showCheckout);
    return (
        <View>
            <ScrollView>
                <View style={globalStyle.screenContainer}>
                    <ImageBackground source={restaurantCoverImg} style={globalStyle.resturantHeader} resizeMode="cover">

                        <View style={globalStyle.headerIcon}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <ArrowLeft />
                            </TouchableOpacity>

                            <View style={styles.headerRightIcon}>
                                <TouchableOpacity style={styles.headerIconButton}>
                                    <Share />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.headerIconButton}>
                                    <Heart />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.headerIconButton}>
                                    <Search />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.resturantDetails}>
                        <View>
                            <Text style={styles.restaurantName}>Lilian Cuisine <Verified color={theme.color.primary} /></Text>

                            <Image resizeMode='cover' source={restaurantProfileImg} style={styles.restaurantProfileImg} />

                        </View>

                        <View style={styles.resturantMoreDetails}>
                            <View style={styles.resturantDetailsRating}>
                                <Text style={[styles.resturantDetailsText]}><Location color='#6D7175' />89 Lekki Road, Uyo</Text>

                                <View style={styles.resturantDetailsRating}>
                                    <Text style={styles.resturantDetailsText}> <Flame />4.5</Text>
                                    <Text style={styles.resturantDetailsText}>(56)</Text>
                                </View>
                            </View>

                            <View style={styles.resturantDetailsRating}>
                                <View style={styles.resturantDetailsRating}>
                                    <Text style={[styles.resturantDetailsText, styles.resturantDetailsTextActive]}>Open:</Text>
                                    <Text style={styles.resturantDetailsText}> 10:00am - 9:00pm</Text>
                                </View>

                                <View style={styles.resturantDetailsRating}>
                                    <Text style={[styles.resturantDetailsText, styles.resturantDetailsTextActive]}>Delivery:</Text>
                                    <Text style={styles.resturantDetailsText}> 25-30 min</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.filter}>
                        <CategoryFilter
                            filterData={filterData}
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                        />
                    </View>

                    <View style={styles.resturantMenu}>
                        <Menu menuData={menuData} />
                    </View>

                </View>
            </ScrollView>

            {/* Chceckout Buttoon */}
            {/* Conditional rendering for Checkout Button based on showCheckout state */}
            {showCheckout && (
                <View style={globalStyle.userCheckoutContainer}>
                    <CheckoutButton navigation={navigation}/>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    resturantHeader: {
        height: height * 0.24,
        backgroundColor: 'red',
        paddingVertical: 50,
        paddingHorizontal: 25,
        // alignItems: 'center',
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerRightIcon: {
        flexDirection: 'row',
        gap: 15
    },
    headerIconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F680',
        borderRadius: 100,
        padding: 5,
    },
    resturantDetails: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        gap: 5,
    },
    restaurantName: {
        fontSize: theme.fontSize.large * 1.4,
        fontFamily: theme.font.styleBold,
    },

    restaurantProfileImg: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: theme.color.primary,
        width: width * 0.2,
        height: width * 0.2,
        backgroundColor: 'red',
        position: 'absolute',
        top: -60,
        right: 0,

    },
    resturantMoreDetails: {
        gap: 9
    },
    resturantDetailsRating: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    resturantDetailsText: {
        fontFamily: theme.font.light,
        color: theme.color.lightText,
        fontSize: theme.fontSize.medium
    },
    resturantDetailsTextActive: {
        fontFamily: theme.font.minimal,
        color: '#009A19'
    },
    resturantMenu: {
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 100
    }
})