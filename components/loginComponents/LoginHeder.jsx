import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { images, SIZES, FONTS, COLORS } from '../../constants'

const LoginHeder = () => {
  return (
    <View
      style={{
        height: SIZES.height > 700 ? '65%' : '60%',
      }}>
      <ImageBackground
        source={images.loginBackground}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        resizeMode="cover">
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: 200,
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              width: '90%',
              color: COLORS.white,
              ...FONTS.largeTitle,
              lineHeight: 45,
            }}>
            Готувати cмачно просто
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default LoginHeder
