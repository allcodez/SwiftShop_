import React from 'react'
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { theme } from '../../theme'

const { width, height } = Dimensions.get('window')

export default function SignUp() {

    const handleForgetPassword = () => {

    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.screenContent}>
                <View style={styles.formHead}>
                    <Text style={styles.h1Text}>Welcome Back</Text>
                    <Text style={styles.pText}>We missed you while you were away.</Text>
                </View>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {(props) => (
                        <View style={styles.form}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>User ID</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Email Address or Username'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                            </View>

                            <View style={styles.label}>
                                <Text style={styles.labelText}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Create Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />

                                <TouchableOpacity onPress={handleForgetPassword}>
                                    <Text style={styles.loginText}>Forgotten Password</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ gap: 60, marginTop: 20 }}>
                                <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                                    <Text style={styles.submitButtonText}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>

                            {/* <Button title='CREATE AN ACCOUNT' /> */}
                        </View>
                    )}
                </Formik>

                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.loginText}>I don’t have an account. Sign up</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    screenContent: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 25,
        // justifyContent: 'space-between',
        flex: 1,
    },
    formHead: {
        gap: 8,
    },
    h1Text: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.07,
    },
    pText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.04,
        opacity: 0.5,
    },
    form: {
        gap: 20
        // backgroundColor: 'red',
    },
    label: {
        gap: 15,
    },
    labelText: {
        fontFamily: theme.font.minimal,
    },
    input: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#E6E6E6',
        borderRadius: 50,
    },
    submitButton: {
        backgroundColor: theme.color.primary,
        fontFamily: theme.font.minimal,
        alignSelf: 'center',
        paddingHorizontal: 85,
        paddingVertical: 25,
        borderRadius: 40,
    },
    submitButtonText: {
        fontFamily: theme.font.minimal,
        color: 'white',
        fontSize: width * 0.03,

    },
    loginText: {
        fontFamily: theme.font.minimal,
        textAlign: 'center',
        opacity: 0.5,
    }
})