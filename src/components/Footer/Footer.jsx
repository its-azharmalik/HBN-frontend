import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/helboylogo1.png";
import fblogo from "../../assets/images/fblogo.png";
import instalogo from "../../assets/images/instalogo.png";
import ytlogo from "../../assets/images/ytlogo.png";
import twitlogo from "../../assets/images/twitlogo.png";
import location from "../../assets/images/loclogo.png";
import phone from "../../assets/images/Phone.png";
import email from "../../assets/images/Email.png";
import payment from "../../assets/images/payment.png";
import payment2 from "../../assets/images/payment2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem;
    margin: auto;
    margin-top: 200px;
    background: #1e1810;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    position: relative;
    @media (max-width: 820px) {
      width: 100%;
    }
    max-width: 1700px;
  `;
  const FooterLogo = styled.img`
    margin-right: 100px;
    @media (max-width: 700px) {
      margin-right: 0;
    }
  `;
  const SocialContainer = styled.div`
    padding: 10px 10px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 70px 0;
  `;
  const SocialLogo = styled.img``;
  const ContactContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px 0;
    width: 100%;
    @media (max-width: 700px) {
      justify-content: center;
      width: 100%;
      margin: 20px auto;
    }
  `;
  const ContactDetails = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: white;
    margin: 10px 10px;
  `;
  const BottomFooter = styled.div`
    // height: max-content;
    background: #f2f2f2;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    @media (max-width: 968px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  `;
  const BottomContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    padding: 0;
    margin: 0;
  `;
  const PaymentContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 968px) {
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
    }
  `;
  const ItemContainer = styled.div`
    min-width: 150px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: left;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: 20px auto;
    }
  `;
  const ItemHead = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  `;
  const FooterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1500px;
    // height: max-content;

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
    }
  `;
  const PaymentImg1 = styled.img`
    @media (max-width: 369px) {
      display: none;
    }
  `;
  const PaymentImg2 = styled.img`
    display: none;
    @media (max-width: 369px) {
      display: block;
    }
  `;

  return (
    <FooterContainer>
      <FooterTop>
        <FooterLogo src={logo} />
        <ContactContainer>
          {/* <SocialLogo src={location} /> */}
          <ItemContainer>
            <ItemHead> Categories</ItemHead>
            <ContactDetails>
              <Link
                to="/products?q=gainer"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Gainer
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/products?q=whey-protein"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Whey Protein
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/products?q=support-suppliments"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Daily Support
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/products?q=peanut-butter"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Peanut Butter
              </Link>
            </ContactDetails>
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Useful links</ItemHead>
            <ContactDetails>
              <Link
                to="/privacy-policy"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/terms"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Terms and Conditions
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/products"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Pay Now
              </Link>
            </ContactDetails>
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Navigate</ItemHead>
            <ContactDetails>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/products"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Shop
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/account"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Account
              </Link>
            </ContactDetails>
            <ContactDetails>
              <Link
                to="/authenticity"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Authenticity
              </Link>
            </ContactDetails>
          </ItemContainer>
          <ItemContainer>
            <ItemHead>Visit</ItemHead>
            <ContactDetails>DA4/A Main Vikas Marg, Shakarpur,</ContactDetails>
            <ContactDetails>Opp Nathu Sweets</ContactDetails>
            <ContactDetails>New Delhi, 110092</ContactDetails>
            <ContactDetails>
              <a href="tel:+919905633992">+91 9905633992</a>
            </ContactDetails>
          </ItemContainer>
        </ContactContainer>
      </FooterTop>
      <SocialContainer>
        <a href="https://www.facebook.com/hellboynutrition/">
          <SocialLogo src={fblogo} />
        </a>
        <a href="https://www.instagram.com/hellboynutrition/">
          <SocialLogo src={instalogo} />
        </a>
        <a href="https://www.youtube.com/channel/UCdoJJfw_vgpTDqSKDFIy0kg">
          <SocialLogo src={ytlogo} />
        </a>
        <a href="https://twitter.com/hell_nutrition">
          <SocialLogo src={twitlogo} />
        </a>
      </SocialContainer>
      <BottomFooter>
        <BottomContent>Copyright ?? 2022 | Hell Boy Nutrition</BottomContent>
        <PaymentContainer>
          <BottomContent>Pay Securely with </BottomContent>
          <PaymentImg1 src={payment} />
          <PaymentImg2 src={payment2} />
        </PaymentContainer>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
