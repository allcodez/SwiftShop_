import React from 'react';
import {
	TextInput,
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	Image
} from 'react-native';
import { Formik } from 'formik';
import { theme } from '../../theme';
import { globalStyle } from '../../globalStyle';

const { width, height } = Dimensions.get('window');

export default function AddAddress({ navigation }) {
	const addAddress = () => {
		navigation.push('AddFriends')
	};

	return (
		<SafeAreaView style={globalStyle.screenContainer}>
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<ScrollView>
					<View style={styles.screenContent}>
						<View style={styles.formHead}>
							<Text style={styles.h1Text}>Add Your Address</Text>
							<Text style={styles.pText}>Input your delivery address.</Text>
						</View>

						<Formik
							initialValues={{ address: '', phoneNum: '' }}
							onSubmit={(values) => {
								console.log(values);
								addAddress()
							}}
						>
							{(props) => (
								<View style={styles.form}>
									<View style={styles.formInput}>
										<View style={globalStyle.label}>
											<Text style={styles.labelText}>Enter Your Adress</Text>
											<TextInput
												style={globalStyle.input}
												placeholder="Enter Full Name"
												onChangeText={props.handleChange('name')}
												value={props.values.name}
											/>
										</View>

										<View style={globalStyle.label}>
											<Text style={styles.labelText}>Phone Number</Text>
											<View style={styles.inputContainer}>
												<View style={styles.inputImage}>
													<Image source={require('../../assets/twemoji_flag-nigeria.png')} style={styles.inputIcon} />
												</View>

												<TextInput
													// style={styles.input}
													placeholder="Enter Phone Number"
													onChangeText={props.handleChange('phone')}
													value={props.values.phone}
												/>
											</View>
										</View>
									</View>

									<TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
										<Text style={styles.submitButtonText}>CREATE AN ACCOUNT</Text>
									</TouchableOpacity>

									{/* <View style={{ gap: 60, marginTop: 20 }}>
                                        
                                    </View> */}

									{/* <Button title='CREATE AN ACCOUNT' /> */}
								</View>
							)}
						</Formik>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

styles = StyleSheet.create({
	
	screenContent: {
		paddingHorizontal: 30,
		paddingVertical: 30,
		gap: 25,
		// backgroundColor: 'green',


		// justifyContent: 'space-between',
		// flex: 1,
	},
	formHead: {
		gap: 8
	},
	h1Text: {
		fontFamily: theme.font.styleBold,
		fontSize: width * 0.07
	},
	pText: {
		fontFamily: theme.font.minimal,
		fontSize: width * 0.04,
		opacity: 0.5
	},
	form: {
		justifyContent: 'space-between',
		height: height / 1.43,
	},
	formInput: {
		gap: 20,
	},
	
	labelText: {
		fontFamily: theme.font.minimal
	},
	
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#E6E6E6',
		backgroundColor: '#F2F2F2',
		borderRadius: 50,
		position: 'relative',
		overflow: 'hidden',
		gap: 20
	},
	inputImage: {
		backgroundColor: 'white',
		padding: 17,
		borderTopLeftRadius: 50,
		borderBottomLeftRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputIcon: {
		width: 25,
		height: 25
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
		fontSize: width * 0.03

	},
	loginText: {
		fontFamily: theme.font.minimal,
		textAlign: 'center',
		opacity: 0.5
	}
});
