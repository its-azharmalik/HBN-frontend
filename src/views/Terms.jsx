import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'

const Terms = () => {


    const Container = styled.div`
    margin: 2rem 5rem;
  `
  const Heading1 = styled.h1`
    font-weight: 800;
    max-width: 800px;
  `
  const Heading2 = styled.h2`
  
  `
  const AnswerPara = styled.p`
    max-width: 1000px;
  `
  const CustomLink = styled.a`
  color: blue;
  `

  return (
    <React.Fragment>
       <Container>
       <Heading1>RETURNS & REFUNDS</Heading1>
<Heading2>“Due to Covid-19 Pandemic, Returns are RESTRICTED.”</Heading2>
<ol>
    <li>Do not accept any product which seems to be tampered by the courier services.
</li>
<li>Please make a video while opening the Packaging as a supporting proof.
</li>
<li>Do not break the seal of the product if you have any doubts/questions about authenticity.
</li>
<li>Once the product seal is broken, we do not accept return/replacement for the product.</li>
</ol>
<Heading2>WE DO NOT TAKE ANY LIABILITY REGARDING THE TASTE / MIXABILITY OF THE PRODUCT.</Heading2>
<AnswerPara>Since ingredients of BCAA’s and Pre-workout are hygroscopic in nature, they’ll tend to form lumps. However, the supplement is completely safe to consume. We would recommend shaking the product vigorously to break down the clumps which would help them to dissolve in the water. If you have any additional questions or concerns, please email to respective brands. <br />  <br />
We offer you complete peace of mind while ordering at hellboynutrition.com – you can return all items within 7 days of receipt of goods. Please ensure however that the product is unused and the tags, boxes and other packaging is intact. 2-way shipping charges (both side traveling) will be deducted from the refunded amount. <br />  <br />
We offer you complete peace of mind while ordering at Hell Boy Nutrition – you can return all items within 7 days of receipt of goods. <br />  <br />
Please ensure however that the product is unused and the tags, boxes and other packaging are intact. <br />  <br />
If you are not satisfied with what you have bought, we’ll gladly take it back within 7 days from the date of delivery. If you have paid by card then we will reverse the payment via Bank Deposits (as modes of payment) <br />  <br /></AnswerPara>
<Heading2>WHAT SHOULD I DO IF I RECEIVE A DAMAGED ITEM, WRONG PRODUCT OR MISSING UNITS IN MY ORDER?</Heading2>
<AnswerPara>If an item is found damaged or incorrect as per description on our website or units are missing as per ordered quantity, please send a snapshot and unboxing video of the outer packaging and products received to our customer care at care@hellboynutrition.com and call us on <CustomLink href="tel:+91-9311468516">+91-9311468516</CustomLink> within 5 days of receipt of the product. We will arrange a reverse pickup for the product after investigating. We will issue a different item in exchange, as per your request. Please note that replacements are subject to the availability of the particular product. <br /> <br /></AnswerPara>
<Heading2>I NEED TO RETURN AN ITEM; HOW DO I ARRANGE FOR A PICK-UP?</Heading2>
<AnswerPara>You can either write us at care@hellboynutrition.com or call at <CustomLink href="tel:+91-9311468516">+91-9311468516</CustomLink> from Monday to Saturday, 10 AM to 6 PM to initiate a return. <br /> <br />
Wherever possible we will facilitate the pick-up of the item. In case, the pick-up cannot be arranged by us, you can return the item through Speed Post courier service and share tracking details and we will return the courier costs.</AnswerPara>
<Heading2>WHAT ARE THE MODES OF REFUND AVAILABLE AFTER CANCELLATION?</Heading2>
<AnswerPara>In order to confirm cancellation of item(s) in your order, you need to indicate your refund preference. Once you have requested the cancellation of item(s) in your order, Hell Boy Nutrition will complete the cancellation and initiate the refund to your bank account. <br /> <br /></AnswerPara>
<Heading2>IN HOW MANY DAYS REFUND AMOUNT WILL GET SETTLED IN MY BANK ACCOUNT?</Heading2>
<AnswerPara>It will take minimum 7 working days to get settled. <br /> <br /></AnswerPara>
<Heading2>CAN AN ORDER BE RETURNED/CANCELLED AFTER OPENING THE PRODUCT SEAL?</Heading2>
<AnswerPara>No, refund/return or cancellation will be entertained after the product seal is open.</AnswerPara>

       </Container>
       <Footer />
    </React.Fragment>
  )
}

export default Terms