import React from 'react'

const NoDataFound = ({data}) => {
  return (
    <p style={{
        fontSize: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '80vw'
    }}>{data}</p>
  )
}

export default NoDataFound