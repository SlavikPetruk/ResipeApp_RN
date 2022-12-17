import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import CustomInput from '../CustomInput'

const ForgetInput = () => {
  const [email, setEmail] = useState('')

  return (
    <View style={{width:'100%'}}>
      <Text>Enter your email</Text>
      <CustomInput value={email} setValue={setEmail} placeholder='email...' image={icons.email} />
    </View>
  )
}

export default ForgetInput
