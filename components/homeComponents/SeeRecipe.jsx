import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'


const SeeRecipe = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen,
      }}>
      <View
        style={{
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.recipe}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: SIZES.radius,
        }}>
        <Text
          style={{
            width: '70%',
            ...FONTS.body4,
          }}>
          Спробуйте 17 нових рецептів яких ви ще не готували
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
          onPress={() => console.log('See Recipes')}>
          <Text
            style={{
              color: COLORS.darkGreen,
              textDecorationLine: 'underline',
              ...FONTS.h4,
            }}>
            Переглянути рецепти
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SeeRecipe
