import React from 'react'
import { Image, Text, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const Viewers = ({ viewersList }) => {
  if (viewersList?.lenght == 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Be the first one to try this
        </Text>
      </View>
    )
  } else if (viewersList?.lenght <= 4) {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}>
          {viewersList?.map((item, index) => (
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: index == 0 ? 0 : -20,
              }}>
              <Image
                source={item.profilePic}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          ))}
        </View>
        <Text>{viewersList?.lenght} people</Text>
      </View>
    )
  } else {
    return <View><Text>{viewersList?.lenght}2 people</Text></View>
  }
}

export default Viewers
