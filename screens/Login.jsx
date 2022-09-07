import React, { useState } from 'react'
import { StatusBar, Text, View, TouchableOpacity } from 'react-native'
import { SIZES, FONTS, COLORS } from '../constants'
import CustomButton from '../components/CustomButton'
import LoginInput from '../components/loginComponents/LoginInput'
import LoginHeder from '../components/loginComponents/LoginHeder'
import ForgetInput from '../components/loginComponents/ForgetInput'

const Login = ({ navigation }) => {
  const [loginForm, setLoginForm] = useState(false)
  const [forgetForm, setForgetForm] = useState(false)

  const renderDetail = () => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
      }}>
      <Text
        style={{
          color: COLORS.gray,
          marginTop: SIZES.radius,
          width: '70%',
        }}>
        Відкрийте для себе більше тисячі чудових рецептів з різних куточків світу...
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <CustomButton
          buttonText="Login"
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
          }}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => setLoginForm(true)}
        />
        <CustomButton
          buttonText="Sing Up"
          buttonContainerStyle={{
            marginTop: SIZES.radius,
            borderColor: COLORS.darkLime,
            borderWidth: 1,
            paddingVertical: 18,
            borderRadius: 20,
          }}
          colors={[]}
          onPress={() => navigation.replace('SingUp')}
        />
      </View>
    </View>
  )

  const renderSignIn = () => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!forgetForm ? <LoginInput /> : <ForgetInput/>}

      <CustomButton
        buttonText={!forgetForm ? 'Login' : "Confirm"}
        buttonContainerStyle={{
          marginTop: SIZES.radius,
          paddingVertical: 12,
          borderRadius: 10,
          width: 280,
        }}
        colors={[COLORS.darkGreen, COLORS.lime]}
        onPress={() => navigation.replace('Home')}
      />
      <TouchableOpacity
        onPress={()=> setForgetForm(true)}
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.gray,
          }}>
          Забули пароль?
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <LoginHeder />
      {!loginForm ? renderDetail() : renderSignIn()}

      <StatusBar barStyle="light-content" />
    </View>
  )
}

export default Login
