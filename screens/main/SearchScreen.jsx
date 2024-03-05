import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TextInput } from 'react-native';
import Setting from '../../assets/svg/Settings.js'
import SearchOutline from '../../assets/svg/SearchOutline.js';
import { globalStyle } from '../../globalStyle.js';
import { theme } from '../../theme.js';


export default function SearchScreen ()  {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView style={styles.screenContent}>
                </ScrollView>
            </KeyboardAvoidingView>      
    </SafeAreaView>
  )
}