import React from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { theme } from '../../theme';
import { globalStyle } from '../../globalStyle';

const { width, height } = Dimensions.get('window');

export default function SignUp({ navigation }) {

    const handleSignUp = () => {
        navigation.push('AddAddress'); // Navigate to AnotherScreen
    };

    const handleLogin = () =>{
        navigation.push('Login');
    }

    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView>
                    <View style={styles.screenContent}>
                        <View style={styles.formHead}>
                            <Text style={styles.h1Text}>Sign Up</Text>
                            <Text style={styles.pText}>Let’s get you all prepared.</Text>
                        </View>

                        <Formik
                            initialValues={{ name: '', email: '', swiftUsername: '', password: '' }}
                            onSubmit={(values, navigation) => {
                                console.log(values);
                                handleSignUp()
                            }}
                        >
                            {(props) => (
                                <View style={styles.form}>
                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>Name</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Enter Full Name'
                                            onChangeText={props.handleChange('name')}
                                            value={props.values.name}
                                        />
                                    </View>

                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>Email</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Enter Email Address'
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                        />
                                    </View>

                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>Swift Username</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Enter Preferred Username'
                                            onChangeText={props.handleChange('swiftUsername')}
                                            value={props.values.swiftUsername}
                                        />
                                    </View>

                                    <View style={globalStyle.label}>
                                        <Text style={globalStyle.labelText}>Password</Text>
                                        <TextInput
                                            style={globalStyle.input}
                                            placeholder='Create Password'
                                            onChangeText={props.handleChange('password')}
                                            value={props.values.password}
                                            secureTextEntry={true}
                                        />
                                    </View>

                                    <View style={{ gap: 60, marginTop: 20 }}>
                                        <Text style={styles.termsText}>
                                            By signing up, you’ve agreed to our mobile app Terms and Conditions.
                                        </Text>

                                        <TouchableOpacity style={globalStyle.solidButton} onPress={props.handleSubmit}>
                                            <Text style={globalStyle.solidButtonText}>CREATE AN ACCOUNT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </Formik>

                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.loginText}>I have an account. Log in</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    screenContent: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 25,
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
        gap: 20,
    },
    termsText: {
        textAlign: 'center',
        fontSize: 12,
        paddingHorizontal: 30,
        fontFamily: theme.font.minimal,
        opacity: 0.5,
    },
    loginText: {
        fontFamily: theme.font.minimal,
        textAlign: 'center',
        opacity: 0.5,
    },
});
