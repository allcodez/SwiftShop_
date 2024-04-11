import React from 'react'
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native'
import { Formik } from 'formik';
import { globalStyle } from '../globalStyle'
import { theme } from '../theme'
import Delivery from '../assets/svg/Delivery';

const { width, height } = Dimensions.get('window')

export default function RiderInstruction() {
    return (
        <View style={[globalStyle.detailsContainer, styles.riderContainer]}>
            <View style={styles.riderHead}>
                <Delivery color={theme.color.primary} />
                <Text style={styles.riderHeadText}>Vendor’s instructions</Text>
            </View>
            <Formik
                initialValues={{ instruction: '' }}
                onSubmit={(values) => {
                    console.log(values);
                    handleLogin();
                }}
            >
                {(props) => (
                    <View style={styles.riderForm}>
                        <TextInput style={styles.riderInput}
                            placeholder='Add notes for the rider (optional).'
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
    riderContainer: {
        backgroundColor: 'transparent',
        padding: 0,
        marginBottom: 60,
        gap: 10
    },
    riderHead: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 30
    },
    riderHeadText: {
        fontFamily: theme.font.bold,
        fontSize: theme.fontSize.medium
    },
    riderForm: {
        backgroundColor: theme.color.white,
        borderRadius: 20,
    },
    riderInput:{
        paddingTop: 30,
        paddingBottom: height / 6,
        paddingHorizontal: 30
    }
})