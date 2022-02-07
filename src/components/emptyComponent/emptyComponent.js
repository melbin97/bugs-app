import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../../assets/colors';
const EmptyComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons style={styles.iconStyle} name="card-text-outline" size={100} color={COLORS.primaryDark} />
        <Text>Nothing to show</Text>
      </View>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: 'center'
  },
  iconStyle: {
    alignSelf: 'center'
  },
  iconContainer: {
    alignSelf: 'center',
  }
})