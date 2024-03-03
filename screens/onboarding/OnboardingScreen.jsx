// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
// import React from 'react'
// import Onboarding from 'react-native-onboarding-swiper';
// import Lottie from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';
// import { setItem } from '../../utils/asyncStorage';

// const { width, height } = Dimensions.get('window');

// export default function OnboardingScreen() {
//     const navigation = useNavigation();

//     const handleDone = () => {
//         navigation.navigate('Home');
//         setItem('onboarded', '1');
//     }

//     const doneButton = ({ ...props }) => {
//         return (
//             <TouchableOpacity style={styles.doneButton} {...props}>
//                 <Text>Done</Text>
//             </TouchableOpacity>
//         )

//     }
//     return (
//         <View style={styles.container}>
//             <Onboarding
//                 onDone={handleDone}
//                 onSkip={handleDone}
//                 DoneButtonComponent={doneButton}
//                 containerStyles={{ paddingHorizontal: 15 }}
//                 pages={[
//                     // page 1
//                     {
//                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                         image: (
//                             <Image source={require('../../assets/img1.png')} />
//                             // <ImageBackground
//                             //     source={require('../assets/img1.png')}
//                             //     style={styles.backgroundImage}
//                             // >
//                             //     <View style={styles.overlay}>
//                             //         <Text style={styles.text}>Your Content</Text>
//                             //     </View>
//                             // </ImageBackground>
//                         ),
//                         title: 'Work Seamlessly',
//                         subtitle: 'Get your work done seamlessly without interruption',
//                     },
//                     {
//                         backgroundColor: '#fef3c7',
//                         image: (
//                             <View style={styles.lottie}>
//                                 <Lottie source={require('../../assets/animations/work.json')} autoPlay loop />
//                             </View>
//                         ),
//                         title: 'Work Seamlessly',
//                         subtitle: 'Get your work done seamlessly without interruption',
//                     },
//                     {
//                         backgroundColor: '#a78bfa',
//                         image: (
//                             <View style={styles.lottie}>
//                                 <Lottie source={require('../../assets/animations/achieve.json')} autoPlay loop />
//                             </View>
//                         ),
//                         title: 'Achieve Higher Goals',
//                         subtitle: 'By boosting your productivity we help you to achieve higher goals',
//                     },
//                 ]}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     lottie: {
//         width: width * 0.9,
//         height: width
//     },
//     backgroundContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     doneButton: {
//         padding: 20,
//     },
//     backgroundImage: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     text: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
// });