import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BottomNav from '../components/Navbar/BottomNav'
import TopNav from '../components/Navbar/TopNav'
import img from '../assets/images/Ellipse3.png'
import Footer from '../components/Footer/Footer'
import useStore from '../store'
import Loading from '../components/Atoms/Loading'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserName = () => {

    const fetchUser = useStore((state)=> state.fetchUser)
    const updateUser = useStore((state)=> state.updateUser)

    let firstNameRef = useRef("Hello");
    let lastNameRef = useRef();
    let genderRef = useRef();
    let emailRef = useRef();
    let phoneRef = useRef();

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [editView, setEditView] = useState(false)

    const fetchCurrentUser = async () => {
        setLoading(true)
        const result  = await fetchUser()
        setUserData(result.data.data);
        if(result.status != 404 || result.status != 500){
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    const handleEditView = async () => {
        setEditView(true);
    }


    const handleDetailsChnage = async () => {
        setLoading(true)
        const config = {
            name : firstNameRef.current.value + " " + lastNameRef.current.value,
            email : emailRef.current.value,
            phone : phoneRef.current.value,
        }
        if(config.email && config.email != ""){
            const response = await updateUser(userData._id, config)
            console.log(response) 
            fetchCurrentUser();
        } else { toast.error(" Enter Email Properly ")}
        setLoading(false)
    }
   
   



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
    align-items: center;
    justify-content: space-between;
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
    const Divflex = styled.div`
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
const ChangeBtn = styled.div`
background: #f9c349;
border-radius: 12px;
width: 14vw;
min-width: 150px;
padding: 10px 0;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 1rem;
color: #ffffff;
cursor: pointer;
margin: 1rem 0.5rem;

`
const Input = styled.input`
background: #FFFFFF;
border: 1px solid #FEC107;
border-radius:5px;
margin-right:2rem;
margin-bottom:1rem;
`
const Check = styled.input`
margin:auto;`
const Div=styled.div`
`

const OrderListContainer = styled.div`
    margin-top: 1rem;

`

const SingleOrder = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
`

const FlexContainer = styled.div`
      display: flex;
      flex-direction: column;
`

const OrderID = styled.p`
      width: 250px;
`

const TotalCost = styled.p`
    width: 100px;

`

const IsPaid = styled.p`
    width: 100px;

`

const LeftProfile = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
`

const Edit = styled.p`
      margin: 1rem;
      cursor: pointer;
`

const Buttons = styled.div`
      display: flex;

`





console.log(userData)

  return (
    <>


    {loading ? <Loading /> : <Container>

        <FlexContainer>
            <NameContainer>
                <LeftProfile>
                <Img src={img}/>
                <Divflex>
                    <Head>Hello,</Head>
                    <Name>{userData?.name}</Name>
                </Divflex>
                </LeftProfile>
               
                <Edit onClick={()=>{
                    handleEditView()
                }}>Edit</Edit>
            </NameContainer>

    
            {userData?.previous_orders.length > 0 ? <OrderListContainer>
                <Name>Previous Orders</Name>
                    <SingleOrder>
                        <OrderID><strong>OrderId</strong></OrderID>
                        <TotalCost><strong>Price</strong></TotalCost>
                        <IsPaid><strong>Payment</strong></IsPaid>
                        <IsPaid><strong>Delivery</strong></IsPaid>
                    </SingleOrder>
                    {userData?.previous_orders.map((order)=> (
                        <Link to={`/orderdetail/${order._id}`} style={{
                            color: 'black'
                        }}>
                            <SingleOrder>
                                <OrderID>{order._id}</OrderID>
                                <TotalCost>Rs. {order.payment_details?.amount}</TotalCost>
                                <IsPaid>{order.payment_done ? "Paid" : "Due"}</IsPaid>
                                <IsPaid>{order.isDelivered ? "Delivered" : "Pending"}</IsPaid>
                            </SingleOrder>
                        </Link>
                        
                    ))}
                    
            </OrderListContainer> : <p style={{
                marginTop: "2rem",
            }}>No Previous Orders. <Link to='/products'>Shop Now</Link></p>}
            
        </FlexContainer>
  
    
  
   {userData ? <React.Fragment>

       {
           editView && <Detail>
       
           <Flexdiv>
           <Title>Personal Information</Title>
           <Btn>Edit</Btn>
           </Flexdiv>
           
             
               <Flexdiv>
                   <Input type='text' placeholder='First Name' ref={firstNameRef} />
                   <Input type='text' ref={lastNameRef} placeholder='Last Name'/>
           
               </Flexdiv>
              {/* <Title>Gender</Title> */}
              <Flexdiv>
              {/* <Check type="radio" ref={genderRef} value="Male" name="gender" /> Male
              <Check type="radio" value="Female" name="gender" /> Female */}
              </Flexdiv>
              <Flexdiv>
                  <Title>Email</Title>
                  <Btn>Edit</Btn>
                  <Btn>Change password</Btn>
              </Flexdiv>
              <Input type='text' ref={emailRef} placeholder='xyz@example.com'/>
              <Flexdiv>
                  <Title>Phone number</Title>
                  <Btn>Edit</Btn>
              </Flexdiv>
              <Input type='text' ref={phoneRef} placeholder='+91 ------------'/>
           
          <Buttons>
                <ChangeBtn onClick={()=>{
                    handleDetailsChnage() 
                }}>Save Changes</ChangeBtn>
                <ChangeBtn onClick={()=>{
                    setEditView(false) 
                }}>Cancel</ChangeBtn>
          </Buttons>
           
           </Detail>
       }

   </React.Fragment>
   
    : <Loading />}
    
        </Container>
    
    }
    <Footer/>
    </>
  )
}

export default UserName