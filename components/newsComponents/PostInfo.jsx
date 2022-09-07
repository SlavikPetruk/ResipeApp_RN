import React from 'react'
import { View, Text } from 'react-native'
import Viewers from '../Viewers'
import { COLORS, FONTS, SIZES } from '../../constants'

const shortDate = (str) => str.substring(0, 10)

const PostInfo = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        width: SIZES.width,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: COLORS.lightGray
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
          {post?.name}
        </Text>

        <Text
          style={{
            marginTop: 5,
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}>
          { shortDate(post.published_date)}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}></View>
      <Text>{ post.topic }</Text>
    </View>
  )
}
export default PostInfo
