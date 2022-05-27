import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'

const Privacy = () => {

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
          <Heading1>Privacy and Policy</Heading1>
          <Heading2>Do we share any personal customer information with anyone?</Heading2>
        <AnswerPara>We share your personal information only with few of our trusted partners including the payment gateway, order fulfilment and tracking partners. Sharing of this data is necessary in order to fulfil your order. Be assured that we will do our best to always protect your personal information.</AnswerPara>
<Heading2>What do we do with your information?</Heading2>
<AnswerPara>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address, phone number, email address, billing, order history, feedback, about your visits to and use of proteingodam.com (including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation etc.)
Email /SMS (if applicable): We may send you emails or SMS about your order, our store, new products, and other updates.</AnswerPara>
<Heading1>CONSENT</Heading1>
<Heading2>How do you get my consent?</Heading2>
<AnswerPara>When you provide us with personal information to complete a transaction, place an order, arrange for a delivery or return a purchase, we imply that you consent to us collecting it and using it for that specific reason only.
If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.</AnswerPara>
<Heading2>How do I withdraw my consent?</Heading2>
<AnswerPara>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at <CustomLink href="mailto:care@hellboynutrition.com">care@hellboynutrition.com</CustomLink> </AnswerPara>
<Heading1>DISCLOSURE</Heading1> 
<AnswerPara>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</AnswerPara>
<Heading1>PAYMENT & SECURITY</Heading1>
<AnswerPara>Hellboynutrition.com is committed to provide you with the most secure experience. For more details, please see our Security Policy</AnswerPara>
<Heading1>THIRD-PARTY SERVICES</Heading1>
<AnswerPara>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions. <br /> <br />
For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. <br /> <br />
In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. <br /> <br />
As an example, if you are located in India and your transaction is processed by a payment gateway located in India, then your personal information used in completing that transaction may be subject to disclosure under the Indian legislation. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service. <br /> <br /></AnswerPara>
<Heading1>INFORMATION SECURITY</Heading1>
<AnswerPara>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. Any information that we collect and store that is personally identifiable is protected using appropriate means, and Hell Boy Nutrition is not responsible for any unauthorized access or use by third parties. <br /> <br />
If you provide us with your credit card, net banking, UPI, mobile wallets or any other online payment information, the information is encrypted with the payment gateway providers only and not by us. <br /> <br /></AnswerPara>
<Heading1>AGE OF CONSENT</Heading1>
<AnswerPara>By using this site, you represent that you are at least the age of majority, or that you are the age of majority you have given us your consent to allow any of your minor dependents to use this site.</AnswerPara>
<Heading1>CHANGES TO THIS PRIVACY POLICY</Heading1>
<AnswerPara>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. <br /> <br />
If our store is acquired or merged with another company in future, your information may be transferred to the new owners so that we may continue to sell products to you. <br /> <br /></AnswerPara>
<Heading1>QUESTIONS AND CONTACT INFORMATION</Heading1>
<AnswerPara>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Officer at <CustomLink href="mailto:care@hellboynutrition.com">care@hellboynutrition.com</CustomLink></AnswerPara>

        </Container>
        <Footer />
    </React.Fragment>
  )
}

export default Privacy