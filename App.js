import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/home'
import Identifier from './screens/identifier'
import Map from './screens/recycleMap'
import Info from './screens/info'
import Rewards from './screens/rewards'
import Schedule from './screens/schedule'
import MarkerPage from './screens/markerPage'

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='Home'
          component={Home}
          />
          <Stack.Screen
          name='Identifier'
          component={Identifier}
          />
          <Stack.Screen
          name='Info'
          component={Info}
          options={{title: "Dicas de Reciclagem"}}
          />
          <Stack.Screen
          name='Map'
          component={Map}
          />
          <Stack.Screen
          name='Rewards'
          component={Rewards}
          />
          <Stack.Screen
          name='Schedule'
          component={Schedule}
          />
          <Stack.Screen
          name='MarkerPage'
          component={MarkerPage}
          options={{title: "Ponto de Reciclagem"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

}