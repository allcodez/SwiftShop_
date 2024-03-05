// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const img1Source = require('../assets/img1.png');
      const img2Source = require('../assets/img2.png');
      const logoWhiteSource = require('../assets/logoWhite.png');

      await Promise.all([
        Image.prefetch(Image.resolveAssetSource(img1Source).uri),
        Image.prefetch(Image.resolveAssetSource(img2Source).uri),
        Image.prefetch(Image.resolveAssetSource(logoWhiteSource).uri),
      ]);

      setLoading(false);
    };

    preloadImages();
  }, []);

  // useEffect(() => {
  //   if (!loading) {
  //     // Navigate to your main screen or initial routes
  //     navigation.push('GetStarted'); // Replace 'MainScreen' with your actual screen name
  //   }
  // }, [loading, navigation]);

  return (
    <View style={styles.container}>
      {/* Your loading indicator or splash screen */}
      {/* You can add an ActivityIndicator or any other loading UI */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default LoadingScreen;
