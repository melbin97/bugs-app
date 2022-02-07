import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, useColorScheme } from "react-native"
import { COLORS } from '../../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { login } from '../../store/entities/user';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';


const LoginScreen = (props) => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const scheme = useColorScheme();
  const [isFormInvalid, setIsFormInvalid] = useState(true)
  const textInputStyle = {...styles.textInput, color: scheme === "dark" ? COLORS.white : COLORS.black}

  useEffect(() => {
    setIsFormInvalid(checkFormValidity())
  }, [userName, password])

  const checkFormValidity = () => {
    if (userName) {
      if (password) {
        return false
      }
    }
    return true
  }


  const dispatch = useDispatch()

  const performLogin = () => {
    try {
      setErrorMessage(null)
      dispatch(login({ userName, password }))
      props.navigation.navigate("Profile")
    } catch (error) {
      setErrorMessage(error)
      setUserName('')
      setPassword('')
    }
  }
  
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableAutomaticScroll style={{ flex: 1, paddingHorizontal: 20 }}>
      <MaterialCommunityIcons style={styles.loginIcon} name='login' size={70} color={COLORS.primary} />
      <View style={styles.welcomContainer}>
        <Text style={styles.mainText}>Hey,</Text>
        <Text style={styles.mainText}>Login now.</Text>
      </View>
      <View style={styles.newUserTextContainer}>
        <Text style={styles.newUserText}>If you are new /</Text>
        <Text style={styles.createAccountLink}> Create New</Text>
      </View>
      <View style={styles.loginSection}>
        <TextInput
          autoFocus
          style={textInputStyle}
          placeholder='Username' 
          value={userName} 
          onChangeText={(text) => setUserName(text)} 
        />
        <TextInput
          style={textInputStyle}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity disabled={isFormInvalid} style={[styles.loginButton, {opacity: isFormInvalid ? 0.5 : 1}]} onPress={() => performLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  welcomContainer: {
    marginTop: 40
  },
  loginIcon: {
    marginTop: 80,
    marginLeft: -10
  },
  mainText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 50
  },
  newUserTextContainer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  newUserText: {
    color: COLORS.primaryLight
  },
  createAccountLink: {
    color: COLORS.primaryDark
  },
  loginSection: {
    marginVertical: 50,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 20,
    borderColor: COLORS.primary,
    marginTop: 20,
  },
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: COLORS.primaryDark
  },
  buttonText: {
    color: COLORS.white,
    alignSelf: "center"
  },
  errorText: {
    marginTop: 10,
    color: COLORS.red
  }
})