import { BlurView } from 'expo-blur'
import React from 'react'
import { View, Platform } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import PostCreatorCardDetail from './PostCreatorCardDetail'

const PostCreatorCardInfo = ({ post }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        intensity={60}
        tint="dark"
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
        }}>
        <PostCreatorCardDetail post={post} />
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
        <PostCreatorCardDetail post={post} />
      </View>
    )
  }
}

export default PostCreatorCardInfo
