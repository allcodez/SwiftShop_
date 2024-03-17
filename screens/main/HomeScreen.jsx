import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput, FlatList, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyle } from '../../globalStyle.js';
import Bell from '../../assets/svg/Bell.js';
import ArrowDown from '../../assets/svg/ArrownDown.js';
import { theme } from '../../theme.js';
import SearchOutline from '../../assets/svg/SearchOutline.js';
import Setting from '../../assets/svg/Settings.js'
import SearchBar from '../../component/Search.jsx';
import FoodImage from '../../assets/food.png';
import Grocery from '../../assets/grocery.png';
import Med from '../../assets/med.png';
import Drinks from '../../assets/drink.png';
import Swiper from 'react-native-swiper';
import Offer from '../../component/Offers.jsx';


const { width, height } = Dimensions.get('window');

// Define category data
const categories = [
    { name: 'Food', image: FoodImage },
    { name: 'Groceries', image: Grocery },
    { name: 'Drinks', image: Drinks },
    { name: 'Med', image: Med }
];

const sliderData = [
    {
        backgroundImage: require('../../assets/slider1.jpeg'),
        sliderText: 'Order from these \nrestaurants and save',
        buttonLabel: 'GET STARTED',
        onPress: () => console.log('Button 1 pressed')
    },
    {
        backgroundImage: require('../../assets/slider2.jpeg'),
        sliderText: 'Get free delivery \nfrom orders above 10K',
        buttonLabel: 'ORDER NOW',
        onPress: () => console.log('Button 2 pressed')
    }
];


export default function HomeScreen({ navigation }) {
    // const navigation = useNavigation();

    // useEffect(() => {
    //     // Call the function to display storage content
    //     displayStorageContent();
    //     const unsubscribe = navigation.addListener('beforeRemove', () => {
    //         // Prevent default behavior of navigating back
    //         navigation.dispatch((state) => {
    //             // Reset navigation state to the initial state
    //             const routes = state.routes.filter((r) => r.name === 'Home');
    //             return routes;
    //         });

    //         // Log onboarded value
    //         AsyncStorage.getItem('onboarded').then((value) => {
    //             console.log('onboarded:', value);
    //         }).catch((error) => {
    //             console.error('Error retrieving onboarded value:', error);
    //         });
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    // Function to display all items in AsyncStorage
    const displayStorageContent = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys(); // Get all keys
            const items = await AsyncStorage.multiGet(keys); // Get all items corresponding to keys
            // Log each item
            items.forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage:', error);
        }
    };

    const handleReset = async () => {
        await removeItem('onboarded');
        navigation.navigate('GetStarted');
    };

    const [data, SetData] = useState(sliderData);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView style={globalStyle.screenContent}>
                    <View style={styles.screenHeader}>
                        <View style={styles.acctImage}>
                            <Image></Image>
                        </View>
                        <View style={styles.screenHeaderText}>
                            <Text style={styles.screenHeaderTittle}>Delivery address</Text>
                            <View style={styles.screenHeaderDropdown}>
                                <Text style={globalStyle.hText}>89 Lekki Road, Uyo </Text>
                                <ArrowDown />
                            </View>
                        </View>
                        <Bell />
                    </View>

                    <SearchBar />

                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Categories</Text>

                        <View style={styles.categoryList}>
                            {categories.map((category, index) => (
                                <TouchableOpacity key={index} style={styles.categoryRow}>
                                    <View style={styles.categoryBox}>
                                        <Image resizeMode='contain' style={styles.categoryImage} source={category.image} />
                                    </View>
                                    <Text style={styles.categoryName}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>


                    <View style={styles.slider}>
                        <View style={styles.sliderContainer}>
                            <FlatList
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                                onScroll={e => {
                                    const x = e.nativeEvent.contentOffset.x;
                                    setCurrentIndex((x / width).toFixed(0));
                                }}
                                horizontal
                                renderItem={({ item, index }) => (
                                    <View style={styles.sliderBox} key={index}>
                                        <View style={styles.sliderContent}>
                                            <ImageBackground style={styles.sliderInnerContent} resizeMode="cover" source={item.backgroundImage}>
                                                <View style={styles.sliderFade}>
                                                    <Text style={styles.sliderText}>{item.sliderText}</Text>
                                                    <TouchableOpacity
                                                        style={[
                                                            styles.sliderButton,
                                                            { backgroundColor: item.buttonLabel === 'GET STARTED' ? theme.color.primary : theme.color.secondary } // Set different background colors based on buttonLabel
                                                        ]}
                                                        onPress={item.onPress}>
                                                        <Text
                                                            style={[
                                                                globalStyle.solidButtonText,
                                                                { color: item.buttonLabel === 'GET STARTED' ? theme.color.white : theme.color.black } // Set different background colors based on buttonLabel
                                                            ]}
                                                        >{item.buttonLabel}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View style={styles.offerHead}>
                        <View style={styles.offetTittle}>
                            <Text style={globalStyle.hText}>Offers near you</Text>
                            <TouchableOpacity>
                                <Text style={styles.offerHeadButtonText}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Offer navigation={navigation}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenHeader: {
        // backgroundColor: 'grey',
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    acctImage: {
        backgroundColor: 'grey',
        height: 50,
        width: 50,
        borderRadius: 100
    },
    screenHeaderText: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    screenHeaderTittle: {
        fontFamily: theme.font.minimal,
        color: theme.color.labelText,
    },
    screenHeaderDropdown: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    screenHeaderAddress: {
        fontFamily: theme.font.styleBold,
        fontSize: theme.fontSize.medium,
    },
    // search: {
    //     paddingHorizontal: 25,
    //     flexDirection: 'row',
    //     gap: 25,
    //     alignItems: 'center',
    // },
    // searchBox: {
    //     backgroundColor: "#F2F2F2",
    //     flex: 1,
    //     // paddingVertical: 10,
    //     borderRadius: 50,
    //     paddingHorizontal: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 13
    // },
    // searchInput: {
    //     // backgroundColor: 'red',
    //     flex: 1,
    //     paddingVertical: 15,
    // },
    category: {
        paddingHorizontal: 25,
        marginTop: 30,
        gap: 15
    },
    categoryTitle: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.055
    },
    categoryList: {
        flexDirection: 'row',
        justifyContent: 'space-around'
        // gap: 20
    },
    categoryRow: {
        alignItems: 'center',
        gap: 7
    },
    categoryBox: {
        // width: width * 0.18,
        // height: height * 0.08,
        padding: 15,
        backgroundColor: '#043E331C',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryImage: {
        width: 33,
        height: 33
    },
    categoryName: {
        fontFamily: theme.font.styleMedium,
        fontSize: width * 0.032
    },
    slider: {
        paddingLeft: 15,
        flex: 1,
        justifyContent: 'center', alignItems: 'center',
        marginTop: 30,
    },
    sliderContainer: {
        // height: height / 4 + 100,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    sliderBox: {
        width: width - 120,
        height: height / 6.6,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    sliderContent: {
        width: '93%',
        height: '90%',
        // backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        // resizeMode: "cover"
    },
    sliderInnerContent: {
        flex: 1,
        // opacity: 0.7
        // resizeMode: "cover"
    },
    sliderFade: {
        backgroundColor: '#00000069',
        // opacity: 0.1,
        flex: 1,
        padding: 20,
        gap: 5
    },
    sliderText: {
        fontFamily: theme.font.styleRegular,
        fontSize: theme.fontSize.medium,
        color: '#ffffff',
        opacity: 1,
    },
    sliderButton: {
        alignSelf: 'left',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 100,

    },
    offerHead: {
        paddingHorizontal: 25,
        marginTop: 30,
        marginBottom: 80
    },
    offetTittle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    offerHeadButtonText: {
        color: theme.color.primary,
        fontFamily: theme.font.minimal
    }

})
