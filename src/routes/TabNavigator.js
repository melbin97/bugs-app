import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { COLORS } from '../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack, UnresolvedBugsStack, ResolvedBugsStack, ProfileStack } from './stackNavigator';
import { useColorScheme } from 'react-native';

const Tab = createMaterialBottomTabNavigator()


const NavigationStack = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        barStyle={{ backgroundColor: COLORS.primaryDark, marginBottom: -15, paddingTop: 5, }}
        activeColor={COLORS.primaryLight}
        inactiveColor={COLORS.primary}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if(route.name === "Home") {
              iconName = "home"
              color = focused ? COLORS.white : COLORS.primary
              size = focused ? 25 : 22
            } else if (route.name === "Unresolved") {
              iconName = "alert-circle"
              color = focused ? COLORS.white : COLORS.primary
              size = focused ? 25 : 22
            } else if (route.name === "Resolved") {
              iconName = "checkbox-marked-circle-outline"
              color = focused ? COLORS.white : COLORS.primary
              size = focused ? 25 : 22
            } else if (route.name === "Profile") {
              iconName = "human"
              color = focused ? COLORS.white : COLORS.primary
              size = focused ? 25 : 22
            }
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Unresolved" component={UnresolvedBugsStack} />
        <Tab.Screen name="Resolved" component={ResolvedBugsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack