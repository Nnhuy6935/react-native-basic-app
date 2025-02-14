import * as React from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, Pressable } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import ContactForm from '../components/ContactForm'
import { KeyboardAvoidingView } from 'react-native'
import SingleCard from '../components/SingleCard'
// import locations from '../model/LocationHelper'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../components/types'
import { useTranslation } from 'react-i18next'
import { UseLocation } from '../locales/UseLocation'

type HomeScreenProps = StackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // lấy location theo ngôn ngữ
  const locations = UseLocation()
  const { t } = useTranslation()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <HeaderComponent />
          <Text style={styles.titleApp}>{t('welcome')}</Text>
          <Text style={styles.bodyContent}>
            <Text style={{ fontSize: 20 }}>🚀</Text>
            {t('welcome-content')}
          </Text>
          <View style={styles.exploreGroup}>
            <Text style={{ marginTop: 3, fontSize: 15 }}>{t('explore-sentence')}</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('AboutScreen')
              }}
              style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : {}]}>
              <Text>{t('explore-action')}</Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.titleApp}>{t('destination-title')}</Text>
            {locations.map(item => (
              <SingleCard location={item} navigation={navigation} key={item.id} />
            ))}
          </View>
          <ContactForm />
          <FooterComponent />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  titleApp: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  bodyContent: {
    fontSize: 15,
    marginHorizontal: 8,
    marginVertical: 10,
    textAlign: 'justify',
  },
  exploreGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    fontSize: 15,
    marginVertical: 10,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#3D8D7A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#B3D8A8',
    borderWidth: 1,
    borderColor: '#3D8D7A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
})

export default HomeScreen
