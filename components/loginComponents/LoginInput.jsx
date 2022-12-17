import React, { useState } from 'react'
import { View } from 'react-native'
import { icons } from '../../constants'
import CustomInput from '../CustomInput'

const LoginInput = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{width:'100%'}}>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder={username}
        image={icons.username}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder={password}
        image={icons.password}
      />
    </View>
  )
}

export default LoginInput
