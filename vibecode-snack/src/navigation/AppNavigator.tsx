import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WebViewScreen from '../screens/WebViewScreen';
import QuickLinksScreen from '../screens/QuickLinksScreen';

export type RootStackParamList = {
  Home: undefined;
  WebView: { url: string; title: string };
  QuickLinks: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QuickLinks" component={QuickLinksScreen} />
      <Stack.Screen 
        name="WebView" 
        component={WebViewScreen}
        options={{
          presentation: 'card',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;