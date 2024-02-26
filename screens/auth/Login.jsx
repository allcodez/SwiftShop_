import React from 'react'
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { theme } from '../../theme'
import { globalStyle } from '../../globalStyle'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

export default function Login({ navigation }) {

    const handleForgetPassword = () => {
        navigation.push('ForgotPassword')
    }

    const handleLogin = () => {

    }

    // const navigation = useNavigation();

    // const handleDone = () => {
    //     navigation.navigate('Home');
    //     setItem('onboarded', '1');
    // }

    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView>
                    <View style={styles.screenContent}>
                        <View style={styles.formHead}>
                            <Text style={styles.h1Text}>Welcome Back</Text>
                            <Text style={globalStyle.pText}>We missed you while you were away.</Text>
                        </View>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {(props) => (
                                <View style={styles.form}>
                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>User ID</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Enter Email Address or Username'
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                        />
                                    </View>

                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>Password</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Enter Password'
                                            onChangeText={props.handleChange('password')}
                                            value={props.values.password}
                                        />

                                        <TouchableOpacity style={styles.forgetPassword} onPress={handleForgetPassword}>
                                            <Text style={globalStyle.pText}>Forgotten Password</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ gap: 30, marginTop: 20 }}>
                                        <TouchableOpacity style={globalStyle.solidButton} onPress={props.handleSubmit}>
                                            <Text style={globalStyle.solidButtonText}>SIGN IN</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={globalStyle.href} onPress={handleLogin}>
                                            <Text style={globalStyle.pText}>I don’t have an account. Sign up</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )}
                        </Formik>


                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}

styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    screenContent: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 25,
        flex: 1,
    },
    formHead: {
        gap: 8,
    },
    h1Text: {
        fontFamily: theme.font.styleBold,
        fontSize: width * 0.07,
    },
    form: {
        gap: 20,
        height: height / 2,
    },
    input: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#E6E6E6',
        borderRadius: 50,
    },
    forgetPassword: {
        alignSelf: 'flex-end',
    }
})