export const getImagesApi = async (searchWord) => {
    const res = await fetch(`https://lexica.art/api/v1/search?q=${searchWord}`)
    const { images } = await res.json()
    return images
  }
  