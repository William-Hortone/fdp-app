import React from 'react'

const BlurEffect = ({showBlur}) => {
  return (
    <div className={showBlur? 'app__blur show-blur' : 'app__blur'} />
  )
}

export default BlurEffect