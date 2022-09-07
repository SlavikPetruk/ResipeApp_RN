import React, { useState } from 'react'
import { View } from 'react-native'
import { icons } from '../../constants'
import CustomInput from '../CustomInput'

const SignUpInput = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  return (
    <View>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="Username..."
        image={icons.username}
      />

      <CustomInput 
        value={email} 
        setValue={setEmail} 
        placeholder="Email..." 
        image={icons.email} 
      />

      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password..."
        image={icons.password}
      />

      <CustomInput
        value={rePassword}
        setValue={setRePassword}
        placeholder="Repeat Password..."
        image={icons.password}
      />
    </View>
  )
}

export default SignUpInput
