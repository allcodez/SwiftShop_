import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';
import Favourite from '../../assets/svg/Favourite.js'

const { width } = Dimensions.get('window');

export default function OrderScreen({ route }) {
    const { orderCategories } = route.params;
    const [activeCategory, setActiveCategory] = useState(orderCategories[0].id);

    const handleCategoryPress = (categoryId) => {
        setActiveCategory(categoryId);
    };

    return (
        <View style={globalStyle.screenContainer}>
            <View style={styles.category}>
                {orderCategories.map(category => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            styles.categoryButton,
                            activeCategory === category.id ? styles.categoryActive : styles.categoryInactive
                        ]}
                        onPress={() => handleCategoryPress(category.id)}
                    >
                        <Text style={[
                            activeCategory === category.id ? styles.categoryActiveText : styles.categoryInactiveText
                        ]}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={globalStyle.screenPlaceholder}>
                {/* <Favourite /> */}
                <Image style={globalStyle.placeholderImage} source={require('../../assets/rafiki2.png')} />
                <View style={globalStyle.placeholderText}>
                    <Text style={globalStyle.placeholderBigText}>There is no favourite yet</Text>
                    <Text style={globalStyle.placeholderSmallText}>Select your favourite restaurants, stores</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    categoryButton: {
        justifyContent: 'center',
        width: width / 2,
        alignItems: 'center',
        paddingVertical: 20,
    },
    categoryActive: {
        borderBottomColor: theme.color.primary,
        borderBottomWidth: 2,
    },
    categoryActiveText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
    },
    categoryInactive: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
    },
    categoryInactiveText: {
        fontFamily: theme.font.minimal,
        fontSize: theme.fontSize.medium,
        color: 'grey',
    },
});












{/* <SafeAreaView style={globalStyle.screenContainer}>
            <ScrollView style={globalStyle.screenContent}>
                <View style={styles.category}>
                    {orderCategories.map(category => (
                        <TouchableOpacity
                            key={category.id}
                            style={[
                                styles.categoryButton,
                                activeCategory === category.id ? styles.categoryActive : styles.categoryInactive
                            ]}
                            onPress={() => handleCategoryPress(category.id)}
                        >
                            <Text style={[
                                activeCategory === category.id ? styles.categoryActiveText : styles.categoryInactiveText
                            ]}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={globalStyle.screenPlaceholder}>
                    <Text>There is no favourite yet</Text>
                    <Text>Select your favourite restaurants, stores</Text>
                </View>
            </ScrollView>
        </SafeAreaView> */}