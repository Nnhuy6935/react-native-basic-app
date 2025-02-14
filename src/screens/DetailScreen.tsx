import * as React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native'
import { AboutScreenRouteProp } from '../components/types'
import { ScrollView } from 'react-native-gesture-handler'

const DetailScreen: React.FC<AboutScreenRouteProp> = ({ route }) => {
  const { location } = route.params
  const { width } = Dimensions.get('window')
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: location.image }}
            style={{ width: width, height: 350, alignSelf: 'center' }}
          />
          {/* lớp overlay làm mờ hình ảnh */}
          <View style={styles.overlay} />
          <Text style={styles.destinationTitle}>{location.title}</Text>
          <View style={styles.detailInfo}>
            <Text style={{ textAlign: 'justify' }}>
              {' '}
              <Text style={{ fontSize: 20 }}> 📝 </Text>
              {location.details}
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9E9D2',
  },
  aboutTitle: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  illustration: {
    // width: Dimensions.get('window'),
    // height: 350,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  destinationTitle: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 25,
    position: 'absolute',
    textAlignVertical: 'bottom',
    color: 'white',
    fontSize: 30,
  },
  detailInfo: {
    backgroundColor: 'white',
    padding: 20,
  },
})

export default DetailScreen
