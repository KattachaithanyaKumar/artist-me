import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingPage = ({navigation}) => {
  function gotoLogin()  {
    navigation.navigate("Login")
  }

  return (
    <Onboarding 
      pages={[
        {
          backgroundColor: "#F7931E",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 1",
          subtitle: "Page 1",
        },
        {
          backgroundColor: "#F7931E",
          image: <Image source={require("../assets/favicon.png")} />,
          title: "Onboarding 2",
          subtitle: "Page 2",
        }
      ]}
      showSkip={false}
      onDone={gotoLogin}
    />
  )
}

export default OnboardingPage

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    // justifyContent: "center"
  }
})