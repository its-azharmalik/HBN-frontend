import React from 'react'
import styled from 'styled-components'
import BottomNav from '../components/Navbar/BottomNav'
import TopNav from '../components/Navbar/TopNav'
import img from '../assets/images/Ellipse3.png'
import Footer from '../components/Footer/Footer'
const UserName = () => {

    const Container =styled.div`
    width:90%;
    margin: 20px auto;
    margin-bottom: 200px;

    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    `
    const NameContainer=styled.div`
    width:26rem;
    border: 1px solid #B5BDC4;
    border-radius: 10px;
    display:flex;
    min-width:15rem;
  
    height:5rem;
    @media (max-width: 955px) {
        width:18rem;

      }
      @media (max-width: 803px) {
        width:26.8rem;
        margin-bottom:2rem;
      }
    `
    const Detail=styled.div`
    // width:30rem;
    border: 1px solid #B5BDC4;
border-radius: 12px;
padding:20px;

    `
    const Head =styled.span`
    font-size:10px;
    `
    const Name =styled.p`
    font-weight: 700;
font-size: 15px;
    `
    const Divflex=styled.div`
    margin: auto 0;
    display:flex;
    flex-direction:column;
    `
    const Img=styled.img`
    width: 83px;
    height: 83px;
    margin: auto 0;
    `
    const Flexdiv=styled.div`
    
    display:flex;
    flex-wrap:wrap;
    margin-top:1rem;
    
    `
    const Title=styled.span`
    margin-right:2rem;
    `
    const Btn=styled.a`
    color: #F9C349;
    margin-right:1rem;
    font-size:11px;


    `
const ChangeBtn=styled.div`
background: #f9c349;
border-radius: 12px;
width: 14vw;
min-width: 150px;
padding: 10px 0;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 1.5vw;
color: #ffffff;
margin-top:1rem;
`
const Input=styled.input`
background: #FFFFFF;
border: 1px solid #FEC107;
border-radius:5px;
margin-right:2rem;
margin-bottom:1rem;
`
const Check=styled.input`
margin:auto;`
const Div=styled.div`
`
  return (
    <>


    <Container>
<NameContainer>
<Img src={img}/>
<Divflex>
<Head>Hello,</Head>
<Name>Nishant Singh</Name>
</Divflex>

</NameContainer>
<Detail>
   
<Flexdiv>
<Title>Personal Information</Title>
<Btn>Edit</Btn>
</Flexdiv>

    <form>
    <Flexdiv>
        <Input type='text' placeholder='name'/>
        <Input type='text' placeholder='name'/>

    </Flexdiv>
   <Title>your Gender</Title>
   <Flexdiv>
   <Check type="radio" value="Male" name="gender"    /> Male
   <Check type="radio" value="Female" name="gender"   /> Female
   </Flexdiv>
   <Flexdiv>
       <Title>Email</Title>
       <Btn>Edit</Btn>
       <Btn>Change password</Btn>
   </Flexdiv>
   <Input type='text' placeholder='name'/>
   <Flexdiv>
       <Title>Phone number</Title>
       <Btn>Edit</Btn>
   </Flexdiv>
   <Input type='text' placeholder='name'/>

    </form>
<ChangeBtn>Save Changes</ChangeBtn>
</Detail>

    </Container>
    <Footer/>
    </>
  )
}

export default UserName