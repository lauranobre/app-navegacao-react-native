import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style ={Styles.body} >
      <View style ={Styles.container}>
        <Text style={Styles.title}>Login</Text>
        <View style={Styles.inputGroup}>
          <Text style={Styles.label}>Usuário:</Text>
          <TextInput style={Styles.input} placeholder ="Digite seu usuário"/>
        </View>
        <View style={Styles.inputGroup}>
          <Text style={Styles.label}>Senha:</Text>
          <TextInput style={Styles.input} placeholder ="Digite sua senha"/>
        </View>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#77a8f8ff',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  container:{
    backgroundColor: '#96befeff',
    borderRadius:  8,
    shadowColor: '#b1cfffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 30,
    width: 300,
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  inputGroup:{
    marginBottom: 20,
    width: '100%',
  },
  label:{
    textAlign: 'left',
    marginBottom: 5,
    color: '#211c74ff',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'white',
    color: '#000',
  },
  button:{
    backgroundColor: '#ffffffff',
    color: '#000',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText:{
    color: '#000',
    fontSize: 16,
  }
})

export default LoginScreen;