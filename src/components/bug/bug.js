import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../../assets/colors';
import { bugsResolved } from '../../store/entities/bugs';

const Bug = (props) => {
  const { bug, isActionsVisible = false } = props
  const dispatch = useDispatch()

  const resolveBug = () => {
    dispatch(bugsResolved({ bugId: bug.id }))
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.detailContainer}>
          <View style={styles.headingContainer}>
            <Text>Bug #{bug.id}</Text>
            <View style={[styles.status, { backgroundColor: COLORS.status[bug.status.id] }]}>
              <Text style={styles.statusText}>{bug.status.text}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.descriptionHeading}>Description</Text>
              <Text style={styles.description}>{bug.description}</Text>
            </View>
            {isActionsVisible ? <TouchableOpacity onPress={() => resolveBug()} style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: COLORS.primaryDark,
            }}>
              <Text style={{ color: COLORS.primaryDark }}>resolve</Text>
            </TouchableOpacity> : null}
          </View>
        </View>

      </View>
    </>
  )
}

export default Bug

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 0.2,
    borderColor: COLORS.primaryLight,
    // backgroundColor: COLORS.white
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15
  },
  statusText: {
    color: COLORS.white
  },
  detailContainer: {
    height: "100%",
    flex: 1,
    borderRadius: 20,
    padding: 10,
    flexGrow: 1
  },
  descriptionContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionHeading: {
    color: COLORS.primaryDark
  },
  description: {
    width: "100%"
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resolveBtn: {
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: COLORS.primaryDark,
    width: 40,
    height: 40,
    borderRadius: 30
  },
  closeButtonText: {
    position: 'relative',
    top: 6,
    bottom: 0,
    left: 0,
    right: 0,
    color: COLORS.white,
    fontSize: 30
  },
  buttonText: {
    position: 'relative',
    top: 1,
    bottom: 0,
    left: 0,
    right: 0,
    color: COLORS.white,
    fontSize: 30
  }
})