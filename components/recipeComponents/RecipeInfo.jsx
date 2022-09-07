import React from 'react'
import { View, Text } from 'react-native'
import Viewers from '../Viewers'
import { COLORS, FONTS, SIZES } from '../../constants'

const RecipeInfo = ({selectedRecipe}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 130,
        width: SIZES.width,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h2,
          }}>
          {selectedRecipe?.name}
        </Text>

        <Text
          style={{
            marginTop: 5,
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}>
          {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}></View>
      <Viewers viewersList={selectedRecipe?.viewers} />
    </View>
  )
}
export default RecipeInfo
