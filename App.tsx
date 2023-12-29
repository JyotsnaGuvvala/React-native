import React from 'react';
import Welcome from './app/welcome';
import Dashboard from './app/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro} from './app/Intro';
import Mainscreen from './app/Mainscreen';
import Manage from './app/Manage';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Mainscreen"
          component={Mainscreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Manage"
          component={Manage}
          options={{
            title: 'Manage',
            headerStyle: {
              backgroundColor: '#0033cc',
            },
            headerTintColor: 'white',
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
