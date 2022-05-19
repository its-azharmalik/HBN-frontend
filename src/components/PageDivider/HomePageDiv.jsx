import React from "react";
import styled from "styled-components";
import freeExchange from "../../assets/images/exchange1.png";
import freeDelivery from "../../assets/images/free-delivery1.png";
import organic from "../../assets/images/organic (1).png";
import saveMoney from "../../assets/images/save-money1.png";
const HomePageDiv = () => {
  const DividerCOntainer = styled.div`
    padding: 10px;
    width: 100%;
    background: #f4f4f6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 150px 0;
  `;
  const DividerImage = styled.img`
    height: 68px;
    width: 68px;
  `;
  const BenefitsTitle = styled.p`
    font-weight: 700;
    font-size: 26px;
    margin: 0;
  `;
  const BenefitsSubTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: rgba(30, 24, 16, 0.8);
  `;
  const BenfitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
  `;
  return (
    <DividerCOntainer>
      <BenfitsContainer>
        <DividerImage src={freeDelivery} />
        <BenefitsTitle>Free Delivery</BenefitsTitle>
        <BenefitsSubTitle>Above Rs. 999 only</BenefitsSubTitle>
      </BenfitsContainer>

      <BenfitsContainer>
        <DividerImage src={organic} />
        <BenefitsTitle>Certified Organic</BenefitsTitle>
        <BenefitsSubTitle>100% Guarentee</BenefitsSubTitle>
      </BenfitsContainer>
      <BenfitsContainer>
        <DividerImage src={saveMoney} />
        <BenefitsTitle>Huge Saving</BenefitsTitle>
        <BenefitsSubTitle>At Lower Price</BenefitsSubTitle>
      </BenfitsContainer>
      <BenfitsContainer>
        <DividerImage src={freeExchange} />
        <BenefitsTitle>Easy Returns</BenefitsTitle>
        <BenefitsSubTitle>No Questions Asked</BenefitsSubTitle>
      </BenfitsContainer>
    </DividerCOntainer>
  );
};

export default HomePageDiv;
