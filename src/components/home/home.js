import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { TextInput, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../../assets/colors';
import { bugsAdded, getRecentlyRaisedBugsSelector } from '../../store/entities/bugs';
import Bug from '../bug/bug';

const Home = (props) => {

  const dispatch = useDispatch()
  const recentlyRaisedBugs = useSelector(getRecentlyRaisedBugsSelector)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [isFormInvalid, setIsFormInvalid] = useState(true)

  const createBug = () => {
    dispatch(bugsAdded({
      description,
      title
    }))
    setDescription('')
    setTitle('')
  }

  useEffect(() => {
    setIsFormInvalid(checkFormValidity())
  }, [title, description])

  const checkFormValidity = () => {
    if (title) {
      if (description) {
        return false
      }
    }
    return true
  }

  const renderRecentBugList = () => {
    return (
      <ScrollView>
        {
          recentlyRaisedBugs.map((bug, index) => {
            return <Bug key={index} bug={bug} isActionsVisible={false}  />
          })
        }
      </ScrollView>
    )
  } 

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Bug</Text>
        <View style={styles.border}/>
        <Text style={styles.title}>Title</Text>
        <TextInput value={title} onChangeText={text => setTitle(text)} underlineColor={COLORS.primaryLight} selectionColor={COLORS.primaryDark} style={styles.inputFieldTitle} />
        <Text style={styles.description}>Description</Text>
        <TextInput multiline={true} value={description} onChangeText={text => setDescription(text)} underlineColor={COLORS.primaryLight} selectionColor={COLORS.primaryDark} style={styles.inputFieldDescription} />
        <TouchableOpacity disabled={isFormInvalid} onPress={() => createBug()} style={[styles.createButton, {opacity: isFormInvalid ? 0.5 : 1}]}>
          <Text style={styles.createButtonLabel}>Create</Text>
        </TouchableOpacity>
      </View>
      {recentlyRaisedBugs.length ? <View styles={styles.recentBugs}>
        <View style={styles.border}/>
        <Text style={styles.recentBugTitle}>Recent Bugs</Text>
        {renderRecentBugList()}
      </View> : null}
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  heading: {
    marginLeft: 15,
    fontSize: 25,
  },
  inputFieldTitle: {
    alignSelf: 'center',
    width: "90%",
    height: 50,
  },
  inputFieldDescription: {
    alignSelf: 'center',
    width: "90%",
    height: 100,
  },
  title: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  description: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  createButton: {
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: COLORS.primaryDark
  },  
  createButtonLabel: {
    color: COLORS.white
  },
  recentBugs: {
    marginHorizontal: 10
  },
  recentBugTitle: {
    marginVertical: 10,
    fontSize: 20
  },
  border: {
    borderBottomWidth: 1, 
    borderColor: COLORS.primary, 
    marginHorizontal: 15, 
    marginTop: 5
  }
})