import React from 'react'
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native'
import { Formik } from 'formik';
import { globalStyle } from '../globalStyle'
import { theme } from '../theme'
import Shop from '../assets/svg/Shop';

const { width, height } = Dimensions.get('window')

export default function VendorInstruction() {
    return (
        <View style={[globalStyle.detailsContainer, styles.vendorContainer]}>
            <View style={styles.vendorHead}>
                <Shop color={theme.color.primary} />
                <Text style={styles.vendorHeadText}>Vendor’s instructions</Text>
            </View>
            <Formik
                initialValues={{ instruction: '' }}
                onSubmit={(values) => {
                    console.log(values);
                    handleLogin();
                }}
            >
                {(props) => (
                    <View style={styles.vendorForm}>
                        <TextInput style={styles.vendorInput}
                            placeholder='Add notes for the restaurant or store (optional).'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}>
                        </TextInput>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    vendorContainer: {
        backgroundColor: 'transparent',
        padding: 0,
        gap: 10
    },
    vendorHead: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 30
    },
    vendorHeadText: {
        fontFamily: theme.font.bold,
        fontSize: theme.fontSize.medium
    },
    vendorForm: {
        backgroundColor: theme.color.white,
        borderRadius: 20,
    },
    vendorInput:{
        paddingTop: 30,
        paddingBottom: height / 6,
        paddingHorizontal: 30
    }
})