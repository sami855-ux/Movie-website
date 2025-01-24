const BASE_URL = "https://www.omdbapi.com/?apikey=a4650e89&"

const fetchImage = async (
  onMovieData: (poster: string) => void
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}t=batman`)
    const data = await response.json()

    onMovieData(data.poster)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export { fetchImage }
