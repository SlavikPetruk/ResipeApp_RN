import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { COLORS, FONTS, icons } from '../../constants'

const PostCreatorCardDetail = ({ post }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
        }}>
        {/* <Image
          source={post?.author?.profilePic}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        /> */}
      </View>

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
          Post by:
        </Text>
        <Text
          style={{
            color: COLORS.white2,
            ...FONTS.h3,
          }}>
          { post.author || post.clean_url }
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => Linking.openURL(`${post.link}`)}
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

export default PostCreatorCardDetail
