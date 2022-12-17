import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'

const Header = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}>
            Ням-Ням Рецепти
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Сьогодні щось готуємо?
          </Text>
        </View>
        <TouchableOpacity
        onPress={() => navigation.replace('Profile')}
        >
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  export default Header