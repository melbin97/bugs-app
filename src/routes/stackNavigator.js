import React from 'react';
import ResolvedBugs from "../components/resolvedBugs/resolvedBugs";
import UnresolvedBugs from '../components/unresolvedBugs/unresolvedBugs';
import Home from '../components/home/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../../assets/colors';
import Profile from '../components/profile/profile';

const Stack = createNativeStackNavigator()

const stackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.primaryDark,
    blurEffect: 'systemMaterialLight',
  },
  headerTitleStyle: {
    color: COLORS.white
  }
} 

export const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{...stackNavigationOptions,title: "Home",}}  name="HomeStack" component={Home} />
      </Stack.Navigator>
  )
}
export const UnresolvedBugsStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{...stackNavigationOptions, title: "Unresolved Bugs"}}  name="UnresolvedStack" component={UnresolvedBugs} />
      </Stack.Navigator>
  )
}
export const ResolvedBugsStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{...stackNavigationOptions, title: "Resolved Bugs"}} name="ResolvedStack" component={ResolvedBugs} />
      </Stack.Navigator>
  )
}
export const ProfileStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{...stackNavigationOptions, title: "Profile"}} name="ProfileStack" component={Profile} />
      </Stack.Navigator>
  )
}