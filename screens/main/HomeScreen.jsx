import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyle } from '../../globalStyle.js';
import Bell from '../../assets/svg/Bell.js';
import ArrowDown from '../../assets/svg/ArrownDown.js';
import { theme } from '../../theme.js';
import SearchOutline from '../../assets/svg/SearchOutline.js';
import Setting from '../../assets/svg/Settings.js'
import SearchScreen from '../../component/Search.jsx'

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        // Call the function to display storage content
        displayStorageContent();
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            // Prevent default behavior of navigating back
            navigation.dispatch((state) => {
                // Reset navigation state to the initial state
                const routes = state.routes.filter((r) => r.name === 'Home');
                return routes;
            });

            // Log onboarded value
            AsyncStorage.getItem('onboarded').then((value) => {
                console.log('onboarded:', value);
            }).catch((error) => {
                console.error('Error retrieving onboarded value:', error);
            });
        });

        return unsubscribe;
    }, [navigation]);

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



    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView style={styles.screenContent}>
                    <View style={styles.screenHeader}>
                        <View style={styles.acctImage}>
                            <Image></Image>
                        </View>
                        <View style={styles.screenHeaderText}>
                            <Text style={styles.screenHeaderTittle}>Delivery address</Text>
                            <View style={styles.screenHeaderDropdown}>
                                <Text style={styles.screenHeaderAddress}>89 Lekki Road, Uyo </Text>
                                <ArrowDown />
                            </View>
                        </View>
                        <Bell />
                    </View>

                    <SearchScreen />

                    <View style={styles.search}>
                        <View style={styles.searchBox}>
                            <SearchOutline color='#61605F66'/>
                            <TextInput style={styles.searchInput}
                                        placeholder='Food, Restaurants, Stores'
                                        />
                        </View>
                        <Setting/>
                    </View>

                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Categories</Text>
                        <View style={styles.categoryList}>
                            <View style={styles.categoryBox}></View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContent: {
        paddingHorizontal: 25,
        height: height,
    },
    screenHeader: {
        // backgroundColor: 'grey',
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
        fontSize: width * 0.037,
    },
    search:{
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
    },
    searchBox:{
        backgroundColor: "#F2F2F2",
        flex: 1,
        // paddingVertical: 10,
        borderRadius: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13
    },
    searchInput:{
        // backgroundColor: 'red',
        flex: 1,
        paddingVertical: 15,
    },
    category:{
        marginTop: 30,
        gap: 10
    },
    categoryTitle:{
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.055
    },
    categoryList:{
        flexDirection: 'row',
    },
    categoryBox: {
        width: width * 0.2,
        height:  height * 0.08,
        backgroundColor: '#043E331C',
        borderRadius: 10
    }

})