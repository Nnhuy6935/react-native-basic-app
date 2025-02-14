import * as React from 'react'
import { Text, View, StyleSheet, Image, Switch } from 'react-native'
import { useState } from 'react'
import { useLanguage } from '../locales/LanguageContext'

const HeaderComponent: React.FC = () => {
  const { language, changeLanguage } = useLanguage()
  const [isEnglish, setIsEnglish] = useState(language === 'en')
  const toggleLanguage = () => {
    setIsEnglish(previousState => !previousState)
    changeLanguage(!isEnglish ? 'en' : 'vi')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerGroup1}>
          <Image source={require('../assets/images/logo.png')} style={{ width: 40, height: 40 }} />
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 0,
              marginTop: 3,
            }}>
            {' '}
            Wave TraViet{' '}
          </Text>
        </View>
        <View style={styles.headerGroup2}>
          <Text style={styles.normalText}>Vie</Text>
          <Switch value={language === 'en'} onValueChange={toggleLanguage} />
          <Text style={styles.normalText}>Eng</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#B3D8A8',
    // paddingHorizontal: 15,
    // paddingTop: 20,
    // paddingBottom: 5,
    padding: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  headerGroup1: {
    display: 'flex',
    flexDirection: 'row',
  },

  headerGroup2: {
    display: 'flex',
    flexDirection: 'row',
  },

  normalText: {
    color: 'white',
    padding: 3,
    marginTop: 10,
  },
})

export default HeaderComponent
