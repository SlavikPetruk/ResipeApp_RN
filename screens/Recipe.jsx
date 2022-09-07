import React, { useRef, useState } from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { HeaderBar, RecipeCardHeader, RecipeInfo } from '../components/recipeComponents/index'

const Recipe = ({ navigation, route }) => {
  let { recipe } = route.params

  const [selectedRecipe, setSelectedRecipe] = useState(recipe)

  const scrollY = useRef(new Animated.Value(0)).current

  console.log('selectedRecipe ------------->  ', selectedRecipe)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <RecipeCardHeader navigation={navigation} scrollY={scrollY} selectedRecipe={selectedRecipe}/>
            <RecipeInfo selectedRecipe={selectedRecipe}/>
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.body3,
                }}>
                {item.description}
              </Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.body3,
                }}>
                {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
      <HeaderBar scrollY={scrollY} navigation={navigation} selectedRecipe={selectedRecipe} />
    </View>
  )
}

export default Recipe
