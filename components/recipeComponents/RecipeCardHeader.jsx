import React from 'react'
import { View, Animated } from 'react-native'
import RecipeCreatorCardInfo from './RecipeCreatorCardInfo'

const HEADER_HEIGHT = 350

const RecipeCardHeader = ({navigation, selectedRecipe, scrollY}) => {
  return (
    <View
      style={{
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <Animated.Image
        source={selectedRecipe?.image}
        resizeMode="contain"
        style={{
          height: HEADER_HEIGHT,
          width: '200%',
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [2, 1, 0.75],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 30,
          right: 30,
          height: 80,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 170, 250],
                outputRange: [0, 0, 100],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <RecipeCreatorCardInfo navigation={navigation} selectedRecipe={selectedRecipe} />
      </Animated.View>
    </View>
  )
}

export default RecipeCardHeader
