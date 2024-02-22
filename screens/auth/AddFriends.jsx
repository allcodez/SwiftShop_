import React from 'react'
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { theme } from '../../theme'

const { width, height } = Dimensions.get('window')

export default function AddFriends() {

    const handleLogin = () => {

    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.screenContent}>
                <View style={styles.formHead}>
                    <Text style={styles.h1Text}>Add Your Friends</Text>
                    <Text style={styles.pText}>It is all love with friends when you surprise them.</Text>
                </View>

                <Formik
                    initialValues={{ name1: '', address1: '', name2: '', address2: '', }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {(props) => (
                        <View style={styles.form}>
                            <View style={styles.label}>
                                <Text style={styles.labelText}>Friedn 1</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Name'
                                    onChangeText={props.handleChange('name1')}
                                    value={props.values.name1}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Address'
                                    onChangeText={props.handleChange('address1')}
                                    value={props.values.address1}
                                />
                            </View>

                            <View style={styles.label}>
                                <Text style={styles.labelText}>Friend2</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Name'
                                    onChangeText={props.handleChange('name2')}
                                    value={props.values.name2}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Address'
                                    onChangeText={props.handleChange('address2')}
                                    value={props.values.address2}
                                />
                            </View>


                            <View style={{ gap: 60, marginTop: 20 }}>
                                <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                                    <Text style={styles.submitButtonText}>CREATE AN ACCOUNT</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                                    <Text style={styles.submitButtonText}>SKIP FOR NOW</Text>
                                </TouchableOpacity>
                            </View>

                            {/* <Button title='CREATE AN ACCOUNT' /> */}
                        </View>
                    )}
                </Formik>

                <Text style={styles.loginText}>A group of friends is discount at SwiftShop</Text>

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