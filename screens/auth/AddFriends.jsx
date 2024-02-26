import React from 'react'
import { TextInput, View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { theme } from '../../theme'
import { globalStyle } from '../../globalStyle'

const { width, height } = Dimensions.get('window')

export default function AddFriends({ navigation }) {

    const handleSkip = () => {

    }

    const handleSubmit = ()=>{
        navigation.push('Login')
    }

    return (
        <SafeAreaView style={globalStyle.screenContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView>
                    <View style={styles.screenContent}>
                        <View style={styles.formHead}>
                            <Text style={styles.h1Text}>Add Your Friends</Text>
                            <Text style={styles.pText}>It is all love with friends when you surprise them.</Text>
                        </View>

                        <View style={styles.mainContent}>
                            <Formik
                                initialValues={{ name1: '', address1: '', name2: '', address2: '', }}
                                onSubmit={(values) => {
                                    console.log(values)
                                    handleSubmit()
                                }}
                            >
                                {(props) => (
                                    <View style={styles.form}>
                                        <View style={globalStyle.label}>
                                            <Text style={globalStyle.labelText}>Friend 1</Text>
                                            <TextInput
                                                style={globalStyle.input}
                                                placeholder='Name'
                                                onChangeText={props.handleChange('name1')}
                                                value={props.values.name1}
                                            />
                                            <TextInput
                                                style={globalStyle.input}
                                                placeholder='Address'
                                                onChangeText={props.handleChange('address1')}
                                                value={props.values.address1}
                                            />
                                        </View>

                                        <View style={globalStyle.label}>
                                            <Text style={globalStyle.labelText}>Friend 2</Text>
                                            <TextInput
                                                style={globalStyle.input}
                                                placeholder='Name'
                                                onChangeText={props.handleChange('name2')}
                                                value={props.values.name2}
                                            />
                                            <TextInput
                                                style={globalStyle.input}
                                                placeholder='Address'
                                                onChangeText={props.handleChange('address2')}
                                                value={props.values.address2}
                                            />
                                        </View>

                                        <TouchableOpacity style={globalStyle.solidButton} onPress={props.handleSubmit}>
                                            <Text style={globalStyle.solidButtonText}>CREATE AN ACCOUNT</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </Formik>

                            <View style={styles.notForm}>
                                <TouchableOpacity style={globalStyle.outlineButton} onPress={handleSkip}>
                                    <Text style={globalStyle.outlineButtonText}>SKIP FOR NOW</Text>
                                </TouchableOpacity>

                                <Text style={styles.moreText}>A group of friends is discount at SwiftShop</Text>
                            </View>

                        </View>
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
    pText: {
        fontFamily: theme.font.minimal,
        fontSize: width * 0.04,
        opacity: 0.5,
    },
    mainContent: {
        gap: 20,
    },
    form: {
        gap: 65
    },
    notForm: {
        gap: 30,
    },
    moreText: {
        fontFamily: theme.font.minimal,
        textAlign: 'center',
        opacity: 0.5,
        fontSize: width * 0.03,
    }
})