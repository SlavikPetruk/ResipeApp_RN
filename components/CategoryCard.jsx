import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const CategoryCard = ({ containerStyle, catagoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={catagoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}>
          {catagoryItem.name}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          {catagoryItem.duration} | {catagoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard
