/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartBar, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Screen1 from './components/Screen1/Screen1';
import Screen2 from './components/Screen2/Screen2';
import Screen3 from './components/Screen3/Screen3';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              tabBarLabel: 'Screen1',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faCoffee} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Screen2"
            component={Screen2}
            options={{
              tabBarLabel: 'Screen1',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faHome} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Screen3"
            component={Screen3}
            options={{
              tabBarLabel: 'Screen1',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faChartBar} size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};



export default App;
