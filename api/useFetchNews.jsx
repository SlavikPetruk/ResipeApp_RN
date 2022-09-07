import { useEffect, useState } from 'react'
import { fetchPosts } from './fetchData'

const LIMIT = 10
const PAGE = 1

export const useFetchNews = (sort, language) => {
    
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])

  useEffect(() => {
    fetchPosts(PAGE, LIMIT, sort, language).then((newNews) => {
      setNews(newNews.articles)
      setPage(newNews.page)
      setLoading(false)
    })
  }, [sort, language])

  async function onEndReached() {
    let newPage = PAGE + 1
    const newNews = await fetchPosts(newPage, LIMIT, sort, language)
    setNews(prevNews => [...prevNews.articles, ...newNews.articles])
  }

  return { loading, news, onEndReached }
}
