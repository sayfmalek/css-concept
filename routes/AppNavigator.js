import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ConceptDetail from '../screens/ConceptDetail';

const Stack = createStackNavigator();

export const AppNavigator = () => (
   <NavigationContainer>
      <Stack.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerStyle: {
               backgroundColor: '#eee',
               height: 60,
            },
            headerTintColor: '#444',
         }}
      >
         <Stack.Screen
            name="Home"
            component={Home}
            options={{
               title: 'CSS Concepts - Isms & Ologies',
            }}
         />
         <Stack.Screen
            name="Detail"
            component={ConceptDetail}
            options={{
               title: 'Concept Detail',
            }}
         />
      </Stack.Navigator>
   </NavigationContainer>
);
