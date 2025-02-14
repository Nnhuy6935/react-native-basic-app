import * as React from 'react'
import { Text, StyleSheet, Image, Pressable } from 'react-native'
import { useState } from 'react'
import Location from '../model/location'
import { HomeScreenNavigationProp } from './types'

interface SingleCardProps {
  location: Location
  navigation: HomeScreenNavigationProp
}

const SingleCard: React.FC<SingleCardProps> = ({ location, navigation }) => {
  const [isReadMore, setIsReadMore] = useState(false)
  const changeDescriptionState = () => setIsReadMore(previousState => !previousState)
  const pressOnSingleCard = () => {
    console.log('click on card ' + location.name)
    navigation.navigate('DetailScreen', { location })
  }
  return (
    <Pressable style={styles.container} onPress={() => pressOnSingleCard()}>
      <Text style={styles.locationTitle}>{location.title}</Text>
      <Image
        source={{ uri: location.image }}
        style={{ width: 200, height: 120, borderRadius: 10, alignSelf: 'center' }}
      />
      <Text>
        {isReadMore ? <Text>{location.details}</Text> : <Text>{location.description} ... </Text>}
        <Pressable
          onPress={() => {
            changeDescriptionState()
          }}>
          {isReadMore ? (
            <Text style={styles.readmoreText}> See Less </Text>
          ) : (
            <Text style={styles.readmoreText}> Read More </Text>
          )}
        </Pressable>
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    padding: 10,
    backgroundColor: '#C9E9D2',
    borderRadius: 10,
    margin: 20,
  },
  socials: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  termAndPrivacy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  linkText: {
    color: 'grey',
    textDecorationLine: 'underline',
  },
  locationTitle: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#3D8D7A',
  },
  readmoreText: {
    color: '#3D8D7A',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
})

export default SingleCard
