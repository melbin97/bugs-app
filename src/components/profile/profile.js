import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../../assets/colors';
import { Images } from '../../../assets/images';
import { getUserInfoSelector, logout } from '../../store/entities/user';

const Profile = () => {

  const dispatch = useDispatch()
  const userDetails = useSelector(getUserInfoSelector)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <Image source={Images.imagePlaceholder} style={styles.placeHolder} />
        <Text style={styles.name}>{userDetails.name}</Text>
        <Text style={styles.designation}>Associate Software Engineer</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={()=>{dispatch(logout())}}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    // borderWidth: 1,
  },
  placeHolder: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 80,
    borderColor: COLORS.primary,
    shadowColor: COLORS.primaryLight,
  },
  name: {
    marginTop: 10,
    alignSelf: 'center'
  },
  designation: {
    marginTop: 10,
    alignSelf: 'center'
  },
  bottomContainer: {

  },
  logoutButton: {
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: COLORS.primaryDark,
  },
  logoutButtonText: {
    color: COLORS.primaryDark
  }
})