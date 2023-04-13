import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createStackNavigator();



const App = () => {


    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )

}

export default App
