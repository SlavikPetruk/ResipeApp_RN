import React from 'react'
import { TextInput, View, StyleSheet, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const CustomInput = ({value, setValue, placeholder, image}) => {
  return (
    <View style={styles.container}>
    <Image
        source={image}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.gray,
        }}/>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },

  input: {
    padding: 10,
    marginLeft: SIZES.radius,
    ...FONTS.body3,
    color: COLORS.darkGreen
  },
})

export default CustomInput