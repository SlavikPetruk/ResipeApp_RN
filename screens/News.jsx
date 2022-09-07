import { useCallback, useState } from 'react'
import { FlatList, View, RefreshControl, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Loading } from '../components/newsComponents/Loading'
import { Picker } from '@react-native-picker/picker'
import { fetchPosts } from '../api/fetchData'
import { Empty } from './Empty'
import { useFetchNews } from '../api/useFetchNews'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import PostCard from '../components/newsComponents/PostCard'

const languagesList = [
  { label: 'Українська', value: 'uk' },
  { label: 'English', value: 'en' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Français', value: 'fr' },
  { label: 'Español', value: 'es' },
]

export const News = ({ navigation }) => {
  const [sortOpen, setSortOpen] = useState(false)
  const [sort, setSort] = useState('relevancy')
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('uk')

  const { loading, news } = useFetchNews(sort, language)

  const keyExtractor = useCallback((post) => post.published_date)


  if (loading) {
    return <Loading />
  }

  return (
    <View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity 
        onPress={() => setLangOpen(!langOpen)}>
          <Image style={{ margin: 12, width: 24, height: 24 }} source={icons.language} />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => setSortOpen(!sortOpen)}>
          <Image style={{ margin: 12, width: 16, height: 16 }} source={icons.sort} />
        </TouchableOpacity>
      </View>
      {langOpen && (
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => {
            setLanguage(itemValue)
            setLangOpen(!langOpen)
          }}>
          {languagesList.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      )}

      {sortOpen && (
        <Picker
          selectedValue={sort}
          onValueChange={(itemValue) => {
            setSort(itemValue)
            setSortOpen(!sortOpen)
          }}>
          <Picker.Item label="релевантність" value="relevancy" />
          <Picker.Item label="дата" value="date" />
          <Picker.Item label="популярність" value="rank" />
        </Picker>
      )}

      {news && (
        <FlatList
          data={news}
          keyExtractor={keyExtractor}
          ListEmptyComponent={Empty}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchPosts} />}
          renderItem={({ item, index }) => (
            <PostCard
              key={index}
              post={item}
              onPress={() => navigation.navigate('PostNews', { post: item })}
            />
          )}
        />
      )}
      <StatusBar theme="auto" />
    </View>
  )
}

export default News
