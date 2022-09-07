import React from 'react'
import { View, Animated, Image, TouchableOpacity } from 'react-native'
import { COLORS, icons, SIZES } from '../../constants'

const HEADER_HEIGHT = 350

const HeaderBar = ({scrollY, navigation, selectedRecipe}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingBottom: 10,
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.black,
          opacity: scrollY.interpolate({
            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
            outputRange: [0, 1],
          })
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          backgroundColor: COLORS.transparentBlack5,
        }}>
        <Image
          source={icons.back}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('bookmark')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          width: 35,
        }}>
        <Image
          source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.darkGreen,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderBar
