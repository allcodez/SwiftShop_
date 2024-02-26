import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.jsx';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen.jsx';
import { getItem } from '../utils/asyncStorage.js';
import GetStarted from '../screens/GetStarted.jsx';
import LoadingScreen from '../screens/Loading.jsx';
import UserType from '../screens/onboarding/UserType.jsx';
import OnboardingOne from '../screens/onboarding/OnboardingOne.jsx'
import OnboardingTwo from '../screens/onboarding/OnboardingTwo.jsx'
import OnboardingThree from '../screens/onboarding/OnboardingThree.jsx'
import SignUp from '../screens/auth/SignUp.jsx'
import AddAddress from '../screens/auth/AddAddress.jsx'
import AddFriends from '../screens/auth/AddFriends.jsx'
import Login from '../screens/auth/Login.jsx'
import ForgotPassword from '../screens/auth/ForgotPassword.jsx'
import Otp from '../screens/auth/Otp.jsx'
import ResetPassword from '../screens/auth/ResetPassword.jsx'



const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='GetStarted'>
          {/* <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} component={LoadingScreen} /> */}
          <Stack.Screen name="GetStarted" options={{ headerShown: false }} component={GetStarted} />
          <Stack.Screen name="UserType" options={{headerShown: false }} component={UserType} />
          <Stack.Screen name="OnboardingOne" options={{ headerShown: false }} component={OnboardingOne} />
          <Stack.Screen name="OnboardingTwo" options={{ headerShown: false }} component={OnboardingTwo} />
          <Stack.Screen name="OnboardingThree" options={{ headerShown: false }} component={OnboardingThree} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name="AddAddress" options={{ headerShown: false }} component={AddAddress} />
          <Stack.Screen name="AddFriends" options={{ headerShown: false }} component={AddFriends} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
          <Stack.Screen name="Otp" options={{ headerShown: false }} component={Otp} />
          <Stack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPassword} />

          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  if (!showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          {/* Screen for the main application */}
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          {/* Add other main application screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


  // if (showOnboarding) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='GetStarted'>
  //         {/* <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} component={LoadingScreen} /> */}
  //         <Stack.Screen name="GetStarted" options={{ headerShown: false }} component={GetStarted} />
  //         <Stack.Screen name="UserType" options={{headerShown: false }} component={UserType} />
  //         <Stack.Screen name="OnboardingOne" options={{ headerShown: false }} component={OnboardingOne} />
  //         <Stack.Screen name="OnboardingTwo" options={{ headerShown: false }} component={OnboardingTwo} />
  //         <Stack.Screen name="OnboardingThree" options={{ headerShown: false }} component={OnboardingThree} />
  //         <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
  //         <Stack.Screen name="AddAddress" options={{ headerShown: false }} component={AddAddress} />
  //         <Stack.Screen name="AddFriends" options={{ headerShown: false }} component={AddFriends} />
  //         <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
  //         <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
  //         <Stack.Screen name="Otp" options={{ headerShown: false }} component={Otp} />
  //         <Stack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPassword} />

  //         <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // } else {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Home'>
  //         <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
  //         <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }


}
