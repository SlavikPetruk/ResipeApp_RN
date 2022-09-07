import { Image, TextInput, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'


const SearchBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          placeholder="Пошук рецептів..."
          placeholderTextColor={COLORS.gray}
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
        />
      </View>
    )
  }

  export default SearchBar