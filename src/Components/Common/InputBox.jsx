import React from 'react'

const InputBox = ({placeholder, onChange}) => {
  return (
    <input placeholder={placeholder} className='company-name-input'  onChange={(e) => onChange(e)}  />
  )
}

export default InputBox