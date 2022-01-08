import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableNativeFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
export default function App() {

  let emailValido = 'dionatannsilvaa@gmail.com'
  let senhaValida = '96098394'
  

  const [validou, setValidou] = useState();
  const [entrou, setEntrou] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  console.log(senha)
  console.log(email) 
  
  function acessar(){
    if(email === emailValido && senha === senhaValida){
      setEntrou("Entrou")
      setValidou(true)
    }else{setEntrou("Login Invalido!")}
  } 


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent={false}/>

      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <View style={{ alignItems: 'flex-end',width: '90%'}}>
        <Text style={validou ? {color:'#000'} : {color:'red'}}>{entrou}</Text>
      </View>

      <TextInput
        placeholder="Celular, usernamo ou email"
        style={styles.input}
        onChangeText={setEmail}           
        ></TextInput>        

      <TextInput
        onChangeText={setSenha}
        placeholder="Sua senha"
        style={styles.input}
      >{senha}</TextInput>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>       

      </View>

      <TouchableOpacity onPress={acessar} style={styles.loginButton}>
          <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continue como Dionatan</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
          <Text style={{marginHorizontal:'3%'}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity >
          <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
    </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText:{
    color:  '#399fff',    
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
    },
    loginText:{
     color: '#fff',
     fontSize: 17
    },
    facebookContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '15%',
    },
    facebookText:{
      color: "#399fff",
      paddingLeft: 8,
      fontSize: 15
    },
    divisor:{
      marginTop: '10%',
      flexDirection: 'row',
      width: '90%',
      justifyContent:'center',
      alignItems: 'center',

    },
    divisorLine:{
      width: '45%',
      height: 2,
      backgroundColor: '#EFEDED',
      borderRadius: 5,
    },
    signUpContainer:{
      flexDirection: 'row',
      marginTop: '10%',
    },
    signUpText:{
      color: '#c4c4c4',
      paddingRight: 5
    },
    signUpButton:{
      color: "#399fff",
      fontWeight: 'bold'
    }   
});
