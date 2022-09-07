import React from 'react'
import { SafeAreaView, FlatList, View, StatusBar } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import {
  CategoryHeader,
  Header,
  SearchBar,
  SeeRecipe,
  TrendingSection,
} from '../components/homeComponents/'
import { COLORS, data, SIZES } from '../constants'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Header />
            <SearchBar />
            <SeeRecipe />
            <TrendingSection />
            <CategoryHeader />
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            containerStyle={{ marginHorizontal: SIZES.padding }}
            catagoryItem={item}
            onPress={() => navigation.navigate('Recipe', { recipe: item })}
          />
        )}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Home
