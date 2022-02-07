import React from 'react';
import { useSelector } from 'react-redux';
import { getUserLoggedInStatus } from '../store/entities/user';
import Navigator from "./TabNavigator"
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from '../components/loginScreen/loginScreen';

const Router = () => {
  const isLoggedIn = useSelector(getUserLoggedInStatus)
  return (
    <PaperProvider>
      {isLoggedIn ? <Navigator /> : <LoginScreen />}
    </PaperProvider>
  )
}

export default Router