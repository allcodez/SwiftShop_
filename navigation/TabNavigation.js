import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen.jsx';
import SearchScreen from '../screens/main/SearchScreen.jsx';
import CraveScreen from '../screens/main/CraveScreen.jsx';
import OrderScreen from '../screens/main/OrderScreen.jsx';
import CartScreen from '../screens/main/CartScreen.jsx';
import LoadingScreen from '../screens/Loading.jsx';
import HomeOutline from '../assets/svg/HomeOutline.js';
import SearchOutline from '../assets/svg/SearchOutline.js';
import CraveOutline from '../assets/svg/CraveOutline.js';
import OrderOutline from '../assets/svg/OrderOutline.js';
import CartOutline from '../assets/svg/CartOutline.js';
import { getItem } from '../utils/asyncStorage.js';
import CustomTabLabel from './TabLabel.js';
import { theme } from '../theme.js';
import { Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window')

// Define the categories array here
const categories = [
    { id: 1, name: 'Vendor' },
    { id: 2, name: 'Food' },
    // Add more categories as needed
];

export default function TabNavigation() {
    const [showOnboarding, setShowOnboarding] = useState(null);

    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, []);

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        setShowOnboarding(onboarded === '2');
    };

    if (showOnboarding === null) {
        return <LoadingScreen />;
    }

    if (showOnboarding) {
        return (

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconComponent;
                        const rn = route.name;

                        if (rn === 'Home') {
                            iconComponent = focused ? <HomeOutline active color="#6654E7" /> : <HomeOutline color="#1c274c" />;
                        } else if (rn === 'Search') {
                            iconComponent = focused ? <SearchOutline active color="#6654E7" /> : <SearchOutline color="#1c274c" />;
                        } else if (rn === 'Crave') {
                            iconComponent = focused ? <CraveOutline active color="#6654E7" /> : <CraveOutline color="#1c274c" />;
                        } else if (rn === 'Order') {
                            iconComponent = focused ? <OrderOutline active color="#6654E7" /> : <OrderOutline color="#1c274c" />;
                        } else if (rn === 'Cart') {
                            iconComponent = focused ? <CartOutline active color="#6654E7" /> : <CartOutline color="#1c274c" />;
                        }

                        return iconComponent;
                    },

                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderTopWidth: 0,
                        paddingHorizontal: 15,
                        paddingBottom: 30,
                        height: 90,
                        paddingTop: 10
                    },
                    tabBarLabel: ({ focused, color, size }) => (
                        <CustomTabLabel
                            focused={focused}
                            label={route.name}
                            fontFamily={theme.font.styleRegular}
                            color={focused ? '#6654E7' : 'grey'}
                            size={2}
                        />
                    ),
                    tabBarInactiveTintColor: 'grey',
                    tabBarActiveTintColor: '#6654E7',
                })}
                tabBarStyle={{
                    display: 'flex',
                    paddingLeft: 40,
                    paddingRight: 40,
                }}
            >
                <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Tab.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
                <Tab.Screen name="Crave" component={CraveScreen}
                    initialParams={{ categories: categories }} // Pass categories as initialParams
                    options={({ route }) => ({
                        headerTitle: route.name === 'Crave' ? 'Favourites' : 'Crave', // Set headerTitle dynamically
                        headerTitleStyle: {
                            fontFamily: theme.font.styleBold,
                            fontSize: width * 0.075,
                            padding: 20
                            // Set fontFamily here
                        },
                        headerStyle: {
                            height: 120,
                            shadowOffset: { width: 0, height: 0 }
                        }
                    })}
                />
                <Tab.Screen options={{ headerShown: false }} name="Order" component={OrderScreen} />
                <Tab.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
            </Tab.Navigator>
        );
    } else {
        return <LoadingScreen />;
    }
}
