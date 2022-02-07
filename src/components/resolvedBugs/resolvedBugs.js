import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getResolvedBugsSelector } from '../../store/entities/bugs';
import Bug from '../bug/bug';
import EmptyComponent from '../emptyComponent/emptyComponent';
const ResolvedBugs = () => {

  const resolvedBugs = useSelector(getResolvedBugsSelector)

  return (
    resolvedBugs.length ? <ScrollView style={styles.bugList}>
      {
        resolvedBugs.map((bug, index)=>{
          return  <Bug key={index} bug={bug} />
        })
      }
    </ScrollView> : <EmptyComponent />
  )
}

export default ResolvedBugs

const styles = StyleSheet.create({
  bugList: {
    paddingTop: 20, 
    marginHorizontal: 20
  }
})