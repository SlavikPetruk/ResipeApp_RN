import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Text } from 'react-native'
import { HeaderBar } from '../components/recipeComponents'
import { COLORS, FONTS, SIZES } from '../constants'

const Profile = ({navigation, selectedRecipe}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
            <Text>sdsdsd</Text>
            <Text>23123</Text>
            <Text>fghsf</Text>

          {/* <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: COLORS.black,
              opacity: scrollY.interpolate({
                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                outputRange: [0, 1],
              }),
            }}
          /> */}
          {/* <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              width: 35,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              backgroundColor: COLORS.transparentBlack5,
            }}>
            <Image
              source={icons.back}
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity> */}
        </View>
        {/* <View style={styles.profileImage}>
            <Image source={selectedRecipe?.author?.profilePic} />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingBottom: 10,
    marginTop: SIZES.padding,
  },
  profileImage: {},
})

export default Profile
