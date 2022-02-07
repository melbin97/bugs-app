import React from "react"
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { COLORS } from "../../../assets/colors"
import { getUnresolvedBugsSelector } from "../../store/entities/bugs"
import Bug from "../bug/bug"
import EmptyComponent from "../emptyComponent/emptyComponent"

const UnresolvedBugs = () => {

  const bugs = useSelector(getUnresolvedBugsSelector)

  const renderList = () => {
    return (
      <ScrollView style={styles.listArea}>
        {
          bugs.map((bug, index) => {
            return (
              <Bug
                key={index}
                bug={bug}
                isActionsVisible
              />
            )
          })
        }
      </ScrollView>
    )
  }

  return (
      <View style={styles.mainContainer}>
        {bugs.length ? renderList() : <EmptyComponent />}
      </View>
  )
}

export default UnresolvedBugs

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  emptyList: {
    height: "90%",
    justifyContent: 'center'
  },
  emptyTextContainer: {
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.primaryDark,
  },
  emptyText: {
    color: COLORS.white,
  }
})