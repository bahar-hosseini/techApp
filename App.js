import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

const getFonts = () =>
     Font.loadAsync({
    openSans : require('./app/assets/fonts/OpenSans-Regular.ttf')
  })


const App = () => {

  const [fontLoading,setFontLoading] = useState(false)

  if(fontLoading){
    return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='welcome' component={()=>{}}/>
    </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return(
      <AppLoading   startAsync={getFonts} />
    )
  }

}

export default App