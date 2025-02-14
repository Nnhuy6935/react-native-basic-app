import * as React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const [name, onChangeName] = useState('')
  const [email, onChangeMail] = useState('')
  const [message, onChangeMessage] = useState('')
  const sendMessageToMail = () => {
    console.log('send message to mail ' + email)
    const receiveEmail = 'work070222@gmail.com'
    const subject = 'Liên hệ hỗ trợ cho Wave Traviet'
    const body =
      'Xin chào, Tôi tên là ' +
      name +
      '\n\n Tôi cần hỗ trợ từ Wave Traviet với vấn đề như sau.\n' +
      message +
      '\n Cảm ơn vì đã dành thời gian quan tâm, \n\n' +
      name +
      '\n' +
      email
    const mailToUrl = `mailto:${receiveEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    Linking.openURL(mailToUrl).catch(err => console.error('Không thể mở mail', err))
  }
  return (
    <View style={styles.container}>
      <View style={styles.contactGroupInfo}>
        <Text style={styles.headerText}>{t('contact-title')}</Text>
        <View>
          <Text style={styles.inputLabel}>{t('contact-name-title')}</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeName}
            value={name}
            placeholder={t('contact-name-hint')}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>{t('contact-email-title')}</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeMail}
            value={email}
            placeholder={t('contact-email-hint')}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>{t('contact-message-title')}</Text>
          <TextInput
            style={styles.inputBigBox}
            onChangeText={onChangeMessage}
            value={message}
            placeholder={t('contact-email-hint')}
            numberOfLines={5}
            multiline
          />
        </View>
        <TouchableOpacity onPress={() => sendMessageToMail()} style={styles.buttonStyle}>
          <Text style={styles.buttonLabel}>{t('button-send-content')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#B3D8A8',
  },
  contactGroupInfo: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    paddingVertical: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#3D8D7A',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#b9b1af',
    padding: 10,
  },
  inputBigBox: {
    height: 80,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#b9b1af',
    padding: 10,
  },
  inputLabel: {
    marginLeft: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonStyle: {
    backgroundColor: '#3D8D7A',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default ContactForm
