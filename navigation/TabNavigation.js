import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen.jsx';
import SearchScreen from '../screens/main/SearchScreen.jsx';
import CraveScreen from '../screens/main/CraveScreen.jsx';
import LoadingScreen from '../screens/Loading.jsx';
import HomeOutline from '../svg/HomeOutline.js';

const Tab = createBottomTabNavigator();

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
                            iconComponent = focused ? <HomeOutline active /> : <HomeOutline />;
                        } else if (rn === 'Search') {
							iconComponent = focused ? <HomeOutline active /> : <HomeOutline />;

                            // Define icon for 'Search' route if needed
                        } else if (rn === 'Crave') {
							iconComponent = focused ? <HomeOutline active /> : <HomeOutline />;

                            // Define icon for 'Crave' route if needed
                        }

                        return iconComponent;
                    },
                    labelStyle: { paddingBottom: 80, fontSize: 80 },
                    style: { padding: 10, height: 90, fontSize: 50 }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Crave" component={CraveScreen} />
            </Tab.Navigator>
        );
    } else {
        return <LoadingScreen />;
    }
}
