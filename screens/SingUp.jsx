import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StatusBar, Text, View } from 'react-native'
import { images, SIZES, FONTS, COLORS } from '../constants'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/loginComponents/LoginInput'
import SignUpInput from '../components/signUpComponents/SignUpInput'

const SingUp = ({ navigation }) => {
  const renderHeader = () => (
    <View
      style={{
        height: SIZES.height > 700 ? '35%' : '30%',
      }}>
      <ImageBackground
        source={images.loginBackground}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        resizeMode="cover">
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[COLORS.transparent, '#182613']}
          style={{
            height: 330,
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding,
          }}
        />
      </ImageBackground>
    </View>
  )

  const renderDetail = () => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            width: '100%',
            justifyContent: 'center',
            ...FONTS.body2,
            color: COLORS.lightGray,
            marginVertical: SIZES.padding,
          }}>
          Create an acount
        </Text>

        <SignUpInput />

        <CustomButton
          buttonText="Register"
          buttonContainerStyle={{
            marginTop: SIZES.radius,
            borderColor: COLORS.darkLime,
            width: '80%',
            borderWidth: 1,
            paddingVertical: 18,
            borderRadius: 20,
          }}
          colors={[]}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  )

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#182613',
        justifyContent: 'center',
      }}>
      {renderDetail()}
      {/* {renderHeader()} */}
      <StatusBar barStyle="light-content" />
    </View>
  )
}

export default SingUp
