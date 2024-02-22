import React from 'react';
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

export default function SignUp({ navigation }) {

    const handleSignUp = () => {
        navigation.push('AddAddress'); // Navigate to AnotherScreen
    };

    const handleLogin = () =>{

    }

    return (
        <SafeAreaView style={styles.screenContainer}>
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
                                    <View style={styles.label}>
                                        <Text style={styles.labelText}>Name</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter Full Name'
                                            onChangeText={props.handleChange('name')}
                                            value={props.values.name}
                                        />
                                    </View>

                                    <View style={styles.label}>
                                        <Text style={styles.labelText}>Email</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter Email Address'
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                        />
                                    </View>

                                    <View style={styles.label}>
                                        <Text style={styles.labelText}>Swift Username</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter Preferred Username'
                                            onChangeText={props.handleChange('swiftUsername')}
                                            value={props.values.swiftUsername}
                                        />
                                    </View>

                                    <View style={styles.label}>
                                        <Text style={styles.labelText}>Password</Text>
                                        <TextInput
                                            style={styles.input}
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

                                        <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                                            <Text style={styles.submitButtonText}>CREATE AN ACCOUNT</Text>
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
    screenContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
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
        paddingHorizontal: 95,
        paddingVertical: 25,
        borderRadius: 40,
    },
    submitButtonText: {
        fontFamily: theme.font.minimal,
        color: 'white',
        fontSize: width * 0.03,
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
