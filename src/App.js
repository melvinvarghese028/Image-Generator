import { createRef, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { getImagesApi } from './helpers/getImagesApi'
import { Head, Images, Text, LinkLexica, AddSearch } from './components'
import './App.css'
let searchWordText
export const LexicaApp = () => {
  const [imagesList, setImagesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showText, setShowText] = useState(false)
  const searchRef = createRef()

  const onAddImages = (searchWord) => {
    searchWordText = searchWord
    setShowText(false)
    setIsLoading(true)
    getImagesApi(searchWord).then((images) => setImagesList([...images]))
    searchRef.current.blur()
  }
  const imageIsLoading = () => {
    setIsLoading(false)
    setShowText(true)
  }
  return (
    <div className='w-full p-1 ml-auto mr-auto'>
      <Head />
      <AddSearch onNewImage={onAddImages} searchRef={searchRef} />
      {showText && <Text text={`Results for: "${searchWordText}"`} />}
      {isLoading && <Text text='Loading...' />}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 1000: 6 }}>
        <Masonry gutter='5px'>
          {imagesList.map((image,index) => index<10 && (
            <Images key={image.id} image={image} imageIsLoading={imageIsLoading} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {showText && <LinkLexica searchWordText={searchWordText} />}
    </div>
  )
}
