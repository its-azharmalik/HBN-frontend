import React, { useEffect, useRef, useState } from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import img from '../assets/images/Massgainer5kg.png'
import Footer from '../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import useStore from "../store";
import Loading from '../components/Atoms/Loading';
import { toast } from 'react-toastify';


const Checkout = () => {

  // utils
  const navigate = useNavigate();

  // getting cart details
  const cartDetails = useStore((state) => state.CartDetails);
  const getCartDetails = useStore((state) => state.getCartDetails);
  const addOrderByCartId = useStore((state)=> state.addOrderByCartId);

  const [cartInfo, setCartInfo] = useState()

  const afunction = async () => {
    const result = await getCartDetails();
    setCartInfo(result.data.data)
  }
  useEffect( () => {
   afunction()
  }, []);


  // price setting
  const discountDisplayPrice = cartDetails.total_cart_price - cartDetails.discounted_cart_price;
  const discountDisplayPercentage = Math.round((((discountDisplayPrice)/cartDetails.total_cart_price)*100 + Number.EPSILON) * 100) / 100;
  const deliveryPrice = 39
  const taxPrice = 18



  const [address, setAddress] = useState()
  const [loading, setLoading] = useState()
  const addressLine1Ref = useRef();
  const addressLine2Ref = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const pincodeInputRef = useRef();
  const phoneInputRef = useRef();

  // const [addressLine1, setAddressLine1] = useState('')
  // const [addressLine2, setAddressLine2] = useState('')
  // const [city, setCity] = useState('')
  // const [state, setState] = useState('')
  // const [pincode, setPincode] = useState('')


  const handleCheckoutOrder = async () => {
  // save the adress state
  const config = {
    address_line_1: addressLine1Ref.current?.value,
    address_line_2: addressLine2Ref.current?.value,
    city: cityInputRef.current?.value,
    state: stateInputRef.current?.value,
    pincode: parseInt(pincodeInputRef.current?.value),
    phone_number: phoneInputRef.current?.value,
  }
  if(config.address_line_1 && config.city && config.state && config.pincode){
    // call the order api
    setLoading(true)
    const result = await addOrderByCartId(config)
    if(result.status != 404 && result.status != 500){
      toast.success(result.message)
      navigate(`/orderdetail/${result.data.data.addedOrder._id}`)
      setLoading(false)
    } else {
      toast.error(result.message)
      setLoading(false)
    }
    console.log(result)
  
  } else {
      toast.error("Fill all mandatory fields")
    }
  
  
}


    const ProductContainer = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ProductContainerHead = styled.div`
    width: 100%;
    height: 100px;
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    // border: 1px solid black;
  `;
  const PageTitle = styled.h1`
font-weight:700;

  `
  const CurrentUrlContainer = styled.div`
    display: flex;
    @media (max-width: 585px) {
  display:none;
      }
  `;
  const ShippingDetail=styled.div`
  display:flex;
  justify-content: space-between;
flex-wrap:wrap;

  `
  const DeliveryContainer=styled.div`
  
  `
  const CheckoutContainer=styled.div`
  border: 1px solid #B5BDC4;
  border-radius:8px;
  padding:10px;
  
  @media (max-width: 704px) {
  width:20.5rem;
  min-width:18.5rem;
  margin-top:2rem;
  }
 
 
  `
  const DeliveryBox=styled.div`
  `
  const PaymentBox=styled.div`
  margin-top:2rem;
  `

  const Form =styled.form`
  display:flex;

  flex-direction:column;
  `
  const Label =styled.label`
  color: #4F4F4F;
  font-size: 16px;

  text-align:left
  `
  const Input = styled.input`
  background: #f9fafa;
  border-radius: 4px;
  border: 1px solid #b5bdc4;
  margin-bottom: 5px;
  height: 35px;
`;
const Select =styled.select`
background: #f9fafa;
border-radius: 4px;
border: 1px solid #b5bdc4;
margin-bottom: 5px;
height: 35px;
`
const Divflex=styled.div`
display:flex;
justify-content: space-between;


`
const ProductConatiner=styled.div`
background: #FAFAFA;
border: 0.69644px solid #B5BDC4;
display:flex;
flex-wrap:wrap;
align-items: center;
border-radius:7px;
margin-bottom:5px;
`
const Productdesc=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`
const Button=styled.button`
background: #F9C349;
color:white;
border:none;
border-radius: 7px;
width:100%;
`
const DashedDivider = styled.hr`
border: none;
border-top: 2px dashed #b5bdc4;
color: #fff;
margin-top:1rem;
margin-bottom:1rem;
height: 1px;
width: 100%;
`;



  return (
    <>



{loading ? <Loading /> :  <ProductContainer>

<CurrentUrlContainer>
<p
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#818181",
            }}
          >
            Home
          </p>
          <p style={{ 
                               fontWeight: "400",
                               fontSize: "14px",
                               color: "#818181",
           }}>/All Products</p>
          <p style={{ 
                               fontWeight: "400",
                               fontSize: "14px",
                               color: "#818181",
           }}>/Product1</p>
          <p style={{ 
                               fontWeight: "400",
                               fontSize: "14px",
                               color: "#818181",
           }}>/Basket</p>
          <p style={{ fontWeight: "500" }}>/Checkout</p>



</CurrentUrlContainer>
<PageTitle>Shipping Details</PageTitle>

{
cartInfo ?
<ShippingDetail>
<DeliveryContainer>
<DeliveryBox>
<h3>Delivery Information</h3>
<Form>

<Label>Phone Number</Label>
<Input ref={phoneInputRef} type='text' placeholder='+91 '/>

<Label>Street address</Label>
<Input ref={addressLine1Ref} type='text' placeholder='Address Line 1'/>
<Input ref={addressLine2Ref} type='text' placeholder='Address Line 2'/>
<Divflex>
   <Form>
       <Label>Pincode</Label>
       <Input ref={pincodeInputRef} placeholder={'Pincode'} style={{width:'107px'}} type='number'/>
   </Form>
   <Form>
       <Label>City</Label>
       <Input ref={cityInputRef} style={{width:'107px'}} placeholder={'City'} id="city" name="city" />
   </Form>
   <Form>
       <Label>State</Label>
       <Input ref={stateInputRef} style={{width:'107px'}} placeholder={'State'} id="state" name="state" />
   </Form>
</Divflex>
</Form>
</DeliveryBox>
<PaymentBox>
{/* padding yaha se */}

</PaymentBox>
</DeliveryContainer>
<CheckoutContainer>
<Divflex>
<p style={{fontSize:'13px'}}>Subtotal</p>
<span style={{fontSize:'13px'}}>₹{cartDetails.total_cart_price}.00</span>
</Divflex>
<Divflex>
<p style={{fontSize:'11px'}}>Discount</p>
<span style={{fontSize:'11px'}}>({discountDisplayPercentage} %) {'->'} Rs. {discountDisplayPrice}</span>
</Divflex>
<Divflex>
<p style={{fontSize:'11px'}}>Delivery</p>
<span style={{fontSize:'11px'}}>₹{deliveryPrice}.00</span>
</Divflex>
<Divflex>
<p style={{fontSize:'11px'}}>Tax</p>
<span style={{fontSize:'11px'}}> + ₹{taxPrice}.00</span>
</Divflex>
<Divflex>
<p style={{fontSize:'13px' , fontWeight:'700'}}>Total</p>
<span style={{fontSize:'13px',fontWeight:'700'}}>₹{cartDetails.discounted_cart_price + taxPrice + deliveryPrice}.00</span>
</Divflex>
{cartInfo?.cart_items?.map((item, index)=> {
return (<ProductConatiner key={index}>
<img src={item.product_id.main_url} style={{width:'35px',
height:'35px'}}/>
<Productdesc>
    <p style={{fontSize:'9px'}}>{item.product_id.name} {item.featured_product_id.flavour} ( {item.product_id.weight}KG )</p>
<span style={{fontSize:'9px'}}>₹{item.featured_product_id.price}.00</span>
</Productdesc>
</ProductConatiner>)

}) 
}


<DashedDivider/>
<Button onClick={(e)=>{
handleCheckoutOrder()
}}>Checkout</Button>


</CheckoutContainer>
</ShippingDetail>
: <Loading />
}

</ProductContainer> }


<Footer/>
</>
  )
}

export default Checkout