import { Text, TouchableOpacity, View } from 'react-native'
import { FONTS, SIZES } from '../../constants'

const CategoryHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: SIZES.padding,
      }}>
      <Text
        style={{
          flex: 1,
          ...FONTS.h2,
        }}>
        Categories
      </Text>
      <TouchableOpacity>
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryHeader
