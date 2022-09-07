import TrendingCard from '../TrendingCard'
import { data, FONTS, SIZES } from '../../constants'
import { FlatList, Text, View } from 'react-native'


const TrendingSection = () => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text
        style={{
          marginHorizontal: SIZES.padding,
          ...FONTS.h2,
        }}>
        Trending Recipes
      </Text>
      <FlatList
        data={data.trendingRecipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TrendingCard
                containerStyle={{ marginLeft: index === 0 ? SIZES.padding : 0 }}
                item={item}
                key={index}
                onPress={() => navigation.navigate('Recipe', { recipe: item })}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default TrendingSection
