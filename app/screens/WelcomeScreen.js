import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const WelcomeScreen = () => {
  return (
    <ImageBackground source={require('../assets/bg1.jpg')}
    style={styles.background}
    blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo2.png')} style={styles.logo}
        />
        <Text style={styles.logoText}>BTech</Text>
      </View>
<View style={styles.buttonContainer}>
  <CustomButton title='Signin' onPress={()=>{}}/>
  <CustomButton title='Signup'onPress={()=>{}}/>
</View>
    </ImageBackground>

   
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex:1 ,
    alignItems:'center',
    justifyContent:'flex-end'
  },buttonContainer:{
    width:'100%',
    padding:20
  },
  logo:{
    width:160,
    height: 160,
  },
  logoText:{
    color: '#ff6347',
    top:5,
    fontSize:20,
    justifyContent:'center'

  },
  logoContainer:{
    position: 'absolute',
    top:40
  }

})