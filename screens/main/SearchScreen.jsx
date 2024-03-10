import React, {useState} from 'react'
import { View, Stylesheet, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import Setting from '../../assets/svg/Settings.js'
import SearchOutline from '../../assets/svg/SearchOutline.js';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';
import SearchBar from '../../component/Search.jsx';
import Offer from '../../component/Offers.jsx'



export default function SearchScreen() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Define your filter data in a JSON object
    const filterData = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Food' },
        { id: 3, label: 'Supermarket' },
        { id: 4, label: 'Pharmacy' }
    ];

    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView style={globalStyle.screenContent}>
                    <View style={styles.search}>
                        <SearchBar />
                    </View>

                     {/* Filter Buttons */}
                     <View style={styles.filter}>
                        {filterData.map((filter, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.filterBox,
                                    filter.label === activeFilter ? styles.filterBoxActive : styles.filterBoxOutline
                                ]}
                                onPress={() => setActiveFilter(filter.label)}
                            >
                                <Text
                                    style={[
                                        styles.filterBoxText,
                                        filter.label === activeFilter ? styles.filterBoxActiveText : styles.filterBoxOutlineText
                                    ]}
                                >
                                    {filter.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.searchResults}>
                        <Offer />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical: 20,
    },
    searchResults: {
        paddingHorizontal: 25,
        marginBottom: 80
    },
    filter:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-around', 
    },
    filterBoxActive:{
        backgroundColor: theme.color.primary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5
    },
    filterBoxOutline:{
        borderWidth: 1,
        borderColor: "#E6E6E6",
        paddingHorizontal: 20,
        paddingVertical: 15, 
        borderRadius: 5 
    },
    filterBoxActiveText:{
        fontFamily: theme.font.styleRegular,
        color: theme.color.white,
        fontSize: theme.fontSize.medium
    },
    filterBoxOutlineText:{
        fontFamily: theme.font.styleRegular,
        color: theme.color.black,
        fontSize: theme.fontSize.medium
    }
})