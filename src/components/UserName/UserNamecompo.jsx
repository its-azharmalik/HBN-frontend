import React from 'react'
import styled from 'styled-components'

const UserNamecompo = () => {
    const Main=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    `
  const Container =styled.div`
display:flex;
justify-items:center;



   
  `
  const Info=styled.div`

  padding-right:1rem;
  border-right:1px solid black;
  height:5rem;
  margin:1rem;
  box-sizing: border-box;
  @media (max-width: 440px) {
   border:none;
   
  }
  
  `
  const Detail=styled.div`
  box-sizing: border-box;
  
  `
  const Label=styled.div`
  
  `
  const P =styled.div`
  font-size:12px;
  `
  const Savebtn=styled.div`
  background: #f9c349;
border-radius: 4px;
width: full;
min-width: 150px;
padding: 4px 0;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 1rem;
color: #ffffff;
margin-top:1rem;`
const Input=styled.input`
background:white;
margin-bottom:1rem;
border: 1px solid #B5BDC4;
border-radius:4px;
`
const Div=styled.div`
margin:1rem;
  
display:flex;
justify-content:space-between;
flex-wrap:wrap;
padding:1.2rem;
border-radius:4px;
background:white;
box-shadow: 0px 4px 8px -4px rgba(22, 34, 51, 0.08), 0px 16px 24px rgba(22, 34, 51, 0.08);
@media (max-width: 440px) {
  padding:.8rem;
 
 }

`
    return (
    <>
    <Main>

    
    <Container>
        <Div>

      
<Info>
<Label>Your New password Must</Label>
<P>Be at leaste 4 characters in lenght</P>
<P>Not be same your current password</P>
<P>Not Contain Common password</P>
</Info>

<Detail>
<Label>current password</Label>
<Input type='text'/>
<Label>New password</Label>
<Input type='text'/>
<Label>Retype New password</Label>
<Input type='text'/>
<Savebtn>Save password</Savebtn>
</Detail>
</Div>
    </Container>
    </Main>
    </>
  )
}

export default UserNamecompo