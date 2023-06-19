import { PropTypes } from 'prop-types'
import { useState } from 'react'
import './AddSearch.css'
export const AddSearch = ({ onNewImage, searchRef }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length < 1) return
    setInputValue('')
    onNewImage(inputValue.trim())
  }
  return (
    <>
      <form
        onSubmit={onSubmit}
        className='FormContainer'
      >
        <input
          ref={searchRef}
          className='input'
          id='inputID'
          type='search'
          placeholder='Search for an image'
          value={inputValue}
          onChange={onInputChange}
        />
        <svg
          className='absolute top-[12px] left-2'
          width='25'
          fill='rgba(255,255,255,.5)'
          viewBox='0 0 24 24'
        >
          <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
        </svg>
      </form>
    </>
  )
}

AddSearch.propTypes = {
  onNewImage: PropTypes.func.isRequired
}
