const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '03e896de75msha1a1f81c8f72616p1035fejsn8ffa80c714b6',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
  },
}

export const fetchPosts = async (page, limit, sort, language) => {
  try {
    const response = await fetch(
      `https://newscatcher.p.rapidapi.com/v1/search?q=food&lang=${language}&sort_by=${sort}&page=${page}&page_size=${limit}&media=True
      `, options )
    return response.ok ? await response.json() : []
  } catch (error) {
    console.error(error)
    Alert.alert('Помилка', 'Помилка отримання даних')
  }
}
