import { BlurView } from 'expo-blur'
import React from 'react'
import { View, Platform } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import RecipeCreatorCardDetail from './RecipeCreatorCardDetail'

const RecipeCreatorCardInfo = ({navigation, selectedRecipe }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        intensity={60}
        tint="dark"
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
        }}>
        <RecipeCreatorCardDetail navigation={navigation} selectedRecipe={selectedRecipe} />
      </BlurView>
    )
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack9,
        }}>
        <RecipeCreatorCardDetail navigation={navigation} selectedRecipe={selectedRecipe} />
      </View>
    )
  }
}

export default RecipeCreatorCardInfo
