const BASE_URL = "https://www.omdbapi.com/?apikey=a4650e89&"

const fetchImage = async (name: string): Promise<string> => {
  let dataImg
  try {
    const response = await fetch(`${BASE_URL}t=${name}`)
    const data = await response.json()

    dataImg = data.poster
  } catch (error) {
    console.error(error)
  }

  return dataImg
}

export { fetchImage }
