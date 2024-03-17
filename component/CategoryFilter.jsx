import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

export default function CategoryFilter ({ filterData, activeFilter, setActiveFilter }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.filterBox,
                item.label === activeFilter ? styles.filterBoxActive : styles.filterBoxOutline
            ]}
            onPress={() => setActiveFilter(item.label)}
        >
            <Text
                style={[
                    styles.filterBoxText,
                    item.label === activeFilter ? styles.filterBoxActiveText : styles.filterBoxOutlineText
                ]}
            >
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    filterBox: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#E6E6E6",
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
});

