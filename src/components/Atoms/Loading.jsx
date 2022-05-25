import React from 'react'
import gif from '../../assets/799.gif'

const Loading = () => {
  return (
   <p style={{
       fontSize: '2rem',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       height: '50vh',
       width: '100vw',
       flexDirection: "column",
   }}><img height={"100px"} width={"100px"} src={gif} />
    <p style={{
      fontSize: '1rem',
      fontWeight: "800",
    }}>Have Patience, We're Loading...</p>
   </p>)
}

export default Loading