import React, { useState, useEffect } from 'react';
import AppNavigation from './navigation/appNavigation';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const customFonts = {
  'Circular-Std-Medium': require('./assets/fonts/CircularStd-Medium.otf'),
  'Circular-Std-Bold': require('./assets/fonts/circular-std-bold.ttf'),
  'CircularStd-Regular': require('./assets/fonts/CircularStd-Regular.otf'),
  'CircularStd-Light': require('./assets/fonts/CircularStd-Light.otf'),
  'Syne-Medium': require('./assets/fonts/Syne-Medium.ttf'),
  'Syne-Bold': require('./assets/fonts/Syne-Bold.ttf'),
  'Syne-Extra-Bold': require('./assets/fonts/Syne-ExtraBold.ttf'),
  'Syne-Regular': require('./assets/fonts/Syne-Regular.ttf'),
  // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigation />
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={{ fontFamily: 'Syne', fontSize: 30 }}>Inter Black</Text>
  //     <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>
  //       Inter SemiBoldItalic
  //     </Text>
  //     <Text style={{ fontSize: 30 }}>Platform Default</Text>
  //   </View>
  // );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;














// import React, { useState } from 'react';
// // import AppLoading from 'expo-app-loading'
// import AppNavigation from './navigation/appNavigation';
// import * as Font from 'expo-font';
// import {useFonts} from 'expo-font';
// import GetStarted from './screens/GetStarted.jsx';
// import UserType from './screens/onboarding/UserType.jsx'



// export default function App() {

//   // const getFonts = () => useFonts({
//   //   'Syne': require('./assets/fonts/Syne.ttf'),
//   //   // 'Syne SemiBold': require('./assets/fonts/Syne SemiBold.ttf')
//   // });
  
//   // const [fontsLoaded, setFontsLoaded] = useState(false);

//   return (
//     <AppNavigation />
//   );

//   // if (fontsLoaded) {
//   //   return (
//   //     <GetStarted />
//   //   );
//   // }
//   // else {
//   //   return (
//   //     <UserType
//   //       startAsync={getFonts}
//   //       onFinish={() => setFontsLoaded(true)}
//   //     />
//   //   )
//   // }

// }
