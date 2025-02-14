import * as React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderComponent from '../components/HeaderComponent'
import { useTranslation } from 'react-i18next'
import FooterComponent from '../components/FooterComponent'

const AboutScreen: React.FC = () => {
  const { t } = useTranslation()
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <HeaderComponent />
          <View style={{ margin: 10 }}>
            <Text style={styles.aboutTitle}>{t('about-title')}</Text>
            <Text style={styles.checklistStyle}>{t('about-content')}</Text>
            <Text style={{ marginTop: 10, fontSize: 15 }}>{t('about-checklist')}</Text>
            <Text style={styles.checklistStyle}> ✅ {t('checklist1')}</Text>
            <Text style={styles.checklistStyle}> ✅ {t('checklist2')}</Text>
            <Text style={styles.checklistStyle}> ✅ {t('checklist3')}</Text>
            <Text style={styles.checklistStyle}> ✅ {t('checklist4')}</Text>
          </View>
          <Text style={styles.aboutTitle}>{t('app-image')}</Text>
          <View style={styles.groupIllustration}>
            <View style={styles.illusGroup1}>
              <Image
                source={require('../../assets/images/illustration1.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginRight: 2,
                }}
              />
              <Image
                source={require('../../assets/images/illustration2.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginRight: 2,
                }}
              />
              <Image
                source={require('../../assets/images/illustration3.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={styles.illusGroup1}>
              <Image
                source={require('../../assets/images/illustration4.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginRight: 2,
                  marginTop: 5,
                }}
              />
              <Image
                source={require('../../assets/images/illustration5.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginRight: 2,
                  marginTop: 5,
                }}
              />
              <Image
                source={require('../../assets/images/illustration6.jpg')}
                style={{
                  width: 120,
                  height: 240,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                  marginTop: 5,
                }}
              />
            </View>
          </View>
          <FooterComponent />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#C9E9D2',
  },
  aboutTitle: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  checklistStyle: {
    fontSize: 15,
    marginTop: 5,
  },
  groupIllustration: {
    margin: 10,
  },
  illusGroup1: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default AboutScreen
