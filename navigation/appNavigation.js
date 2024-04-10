import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, StatusBar } from 'react-native'; // Import StatusBar component
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/main/HomeScreen.jsx';
import SearchScreen from '../screens/main/SearchScreen.jsx';
import CraveScreen from '../screens/main/CraveScreen.jsx';
import OrderScreen from '../screens/main/OrderScreen.jsx';
import CartScreen from '../screens/main/CartScreen.jsx';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen.jsx';
import GetStarted from '../screens/GetStarted.jsx';
import LoadingScreen from '../screens/Loading.jsx';
import UserType from '../screens/onboarding/UserType.jsx';
import OnboardingOne from '../screens/onboarding/OnboardingOne.jsx';
import OnboardingTwo from '../screens/onboarding/OnboardingTwo.jsx';
import OnboardingThree from '../screens/onboarding/OnboardingThree.jsx';
import SignUp from '../screens/auth/SignUp.jsx';
import AddAddress from '../screens/auth/AddAddress.jsx';
import AddFriends from '../screens/auth/AddFriends.jsx';
import Login from '../screens/auth/Login.jsx';
import ForgotPassword from '../screens/auth/ForgotPassword.jsx';
import Otp from '../screens/auth/Otp.jsx';
import ResetPassword from '../screens/auth/ResetPassword.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigation from './TabNavigation.js';
import Restaurant from '../screens/menu/Restaurant.jsx';
import FoodDetails from '../screens/menu/FoodDetails.jsx'
import OrderSummary from '../screens/payment/OrderSummary.jsx';
import { theme } from '../theme.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window')

export default function AppNavigation() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen name="Tabs" options={{ headerShown: false }} component={TabNavigation} />
          <Stack.Screen name="GetStarted" options={{ headerShown: false }} component={GetStarted} />
          <Stack.Screen name="UserType" options={{ headerShown: false }} component={UserType} />
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
          <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
          <Stack.Screen name="FoodDetails" component={FoodDetails} options={{ headerShown: false }} />
          <Stack.Screen
            name="OrderSummary"
            component={OrderSummary}
            options={() => ({
              headerShown: false,
              // headerTitleStyle: {
              //   fontFamily: theme.font.styleBold,
              //   fontSize: width * 0.075,
              //   // paddingVertical: 20, // Adjusted to paddingVertical to maintain header height
              //   // paddingHorizontal: 20 // Added paddingHorizontal for horizontal padding
              // },
              // headerStyle: {
              //   height: 120, // Adjusted height to maintain space for the title
              //   shadowOffset: { width: 0, height: 0 },
                
              // },
              // headerBackTitleVisible: false,
              // headerBackImageSource: {
              //   color: '#000000'
              // }
            })}
          />
          {/* <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: true }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
