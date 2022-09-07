import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const shortTitle = (str) => str.length >= 50 ? str.substring(0, 50) + '...' : str

const shortDate = (str) => str.substring(0, 10)

const PostCard = ({ post, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        shadowOffset: {width: -1, height: 3},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        shadowRadius: 2,  
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={{ uri: post.media }}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          paddingRight: 20,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          width: '75%',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.body3,
          }}>
          {shortTitle(post.title)}
        </Text>
        <Text
          style={{
            paddingTop: SIZES.padding,
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
            { post.author || post.clean_url } | { shortDate(post.published_date)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard
