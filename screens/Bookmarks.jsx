import React from 'react'
import { SafeAreaView, FlatList, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import SearchBar from '../components/homeComponents/SearchBar'
import { COLORS, data, SIZES } from '../constants'

const Bookmarks = ({ navigation }) => {

  const bookmarks = data.categories.filter(item => item.isBookmark === true)
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <SearchBar/>
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

export default Bookmarks
