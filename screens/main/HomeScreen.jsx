import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Call the function to display storage content
    displayStorageContent();
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // Prevent default behavior of navigating back
      navigation.dispatch((state) => {
        // Reset navigation state to the initial state
        const routes = state.routes.filter((r) => r.name === 'Home');
        return routes;
      });

      // Log onboarded value
      AsyncStorage.getItem('onboarded').then((value) => {
        console.log('onboarded:', value);
      }).catch((error) => {
        console.error('Error retrieving onboarded value:', error);
      });
    });

    return unsubscribe;
  }, [navigation]);

  // Function to display all items in AsyncStorage
  const displayStorageContent = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys(); // Get all keys
      const items = await AsyncStorage.multiGet(keys); // Get all items corresponding to keys
      // Log each item
      items.forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.navigate('GetStarted');
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10,
  },
});
