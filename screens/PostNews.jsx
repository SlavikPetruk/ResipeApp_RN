import React, { useRef, useState } from 'react'
import { View, Text, Animated, Image, ScrollView } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { HeaderBar } from '../components/recipeComponents/'
import PostCardHeader from '../components/newsComponents/PostCardHeader'
import PostInfo from '../components/newsComponents/PostInfo'

const shortDate = (str) => str.substring(0, 10)


const Recipe = ({ navigation, route }) => {
  let { post } = route.params
const scrollY = useRef(new Animated.Value(0)).current

  return (
    <ScrollView><View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <PostCardHeader scrollY={scrollY} post={post} />
      <Text
        style={{
          padding: SIZES.padding,
          ...FONTS.body2,
        }}>
        {post.title}
      </Text>
      <PostInfo post={post} />
      
      <Text
        style={{
          padding: SIZES.padding,
          ...FONTS.body3,
        }}>
        {post.summary}
      </Text>
      <Text>{shortDate(post.published_date)}</Text>
      <HeaderBar scrollY={scrollY} navigation={navigation} selectedRecipe={post} />
    </View></ScrollView>
  )
}

export default Recipe
