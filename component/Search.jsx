import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import Setting from '../../assets/svg/Settings.js'
import SearchOutline from '../../assets/svg/SearchOutline.js';


export default function SearchScreen() {
    return (
        <View style={styles.search}>
            <View style={styles.searchBox}>
                <SearchOutline color='#61605F66' />
                <TextInput style={styles.searchInput}
                    placeholder='Food, Restaurants, Stores'
                />
            </View>
            <Setting />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: "#F2F2F2",
        flex: 1,
        // paddingVertical: 10,
        borderRadius: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13
    },
    searchInput: {
        // backgroundColor: 'red',
        flex: 1,
        paddingVertical: 15,
    },

})