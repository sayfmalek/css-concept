import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './routes/AppNavigator';

const getFonts = () => {
   return Font.loadAsync({
      'merriweather-regular': require('./assets/fonts/Merriweather-Regular.ttf'),
      'merriweather-bold': require('./assets/fonts/Merriweather-Bold.ttf'),
   });
};

export default function App() {
   const [fontsLoaded, setFontLoaded] = useState(false);

   if (fontsLoaded) {
      return <AppNavigator />;
   } else {
      return <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} onError={console.warn} />;
   }
}
