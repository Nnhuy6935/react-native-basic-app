import * as React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import { Linking } from 'react-native'
import { useTranslation } from 'react-i18next'

const FooterComponent: React.FC = () => {
  const { t } = useTranslation()
  const openURL = function (link: string) {
    Linking.openURL(link)
  }
  return (
    <View style={styles.container}>
      <View style={styles.socials}>
        <Pressable onPress={() => openURL('https://www.twitter.com/')}>
          <Image
            source={require('../../assets/images/social-twitter.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://www.facebook.com/')}>
          <Image
            source={require('../../assets/images/social-facebook.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://www.linkedin.com')}>
          <Image
            source={require('../../assets/images/social-linkedin.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </Pressable>
      </View>
      <View style={styles.socials}>
        <Text
          style={styles.linkText}
          onPress={() => openURL('https://www.pinterest.com/pin/844493673342423/')}>
          {t('privacy-policy')}
        </Text>
        <Text> | </Text>
        <Text
          style={styles.linkText}
          onPress={() => openURL('https://www.pinterest.com/pin/844493673342423/')}>
          {t('term-of-use')}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3D8A8',
    paddingVertical: 20,
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
})

export default FooterComponent
