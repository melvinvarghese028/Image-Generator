import { useRef, useEffect, useState } from 'react'
import { useObserver } from '../hooks/useObserver'
import './Images.css'
export const Images = ({ image, imageIsLoading }) => {
  const imageRef = useRef()
  const [imageUrl, setImageUrl] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const entry = useObserver(imageRef, { rootMargin: '600px' })
  const animatedEntry = useObserver(imageRef, { rootMargin: '10px', threshold: 0.1 })

  useEffect(() => {
    if (!entry) return
    entry.isIntersecting && setImageUrl(entry.target.dataset.src)
  }, [entry])

  useEffect(() => {
    animatedEntry?.isIntersecting && setIsVisible(true)
    imageIsLoading()
  }, [animatedEntry])

  const imageClass = `translate-y-24 opacity-0 duration-500
    ${isVisible ? 'opacity-100 translate-y-0' : ''}`

  return (
    <div className='ImageContainer'>
      <img
        className='Img'
        ref={imageRef}
        src={imageUrl}
        data-src={image.src}
        width={image.width}
        height={image.height}
        alt={image.model}
      />
    </div>
  )
}
