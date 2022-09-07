import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons } from '../../constants'

const RecipeCreatorCardDetail = ({navigation, selectedRecipe }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile', { selectedRecipe: selectedRecipe })}Profile
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
        }}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}>
          Recipe by:
        </Text>
        <Text
          style={{
            color: COLORS.white2,
            ...FONTS.h3,
          }}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => console.log('23')}
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}>
        <Image
          source={icons.rightArrow}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.lightGreen1,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default RecipeCreatorCardDetail
