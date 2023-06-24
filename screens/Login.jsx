import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import React, {useState} from 'react';

import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("login started");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        //navigate
        navigation.navigate("Home")
      })
      .catch((error) => {
        alert("Please enter a valid email and password");
      })
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/light-01.jpg")} resizeMode='cover' style={styles.image}>
        <View style={styles.box}>
          <Text style={styles.title}>ArtistMe</Text>
          <View style={styles.inputBox}>
            <TextInput 
              style={styles.input} 
              placeholder='Email' 
              placeholderTextColor="white" 
              keyboardType='email-address'
              onChangeText={(text) => setEmail(text)}    
            />
            <TextInput 
              style={styles.input} 
              placeholder='Password' 
              placeholderTextColor="white" 
              secureTextEntry 
              onChangeText={(text) => setPassword(text)} 
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
  },
  inputBox: {
    flexDirection: "column",
    // backgroundColor: "red"
    marginVertical: 40,
  },
  input: {
    width: 300,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    margin: 10,
    borderRadius: 30,
    color: "white",
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    marginTop: 40,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
  }
});
