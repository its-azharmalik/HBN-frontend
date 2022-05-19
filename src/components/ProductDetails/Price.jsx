import React, { useRef } from "react";
import styled from "styled-components";

const Price = ({ getPrice, price }) => {
  const priceRef = useRef();
  if (price) {
    priceRef.current = price;
  }
  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
  `;
  const FeaturesContainer = styled.div``;
  const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #4f4f4f;
    opacity: 0.8;
    margin: 5px 0;
  `;
  const Input = styled.input`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
    outline: none;
    padding: 5px;
  `;
  const FeatureForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
  `;

  return (
    <>
      <FeaturesContainer>
        <Heading>Features</Heading>
        <FeatureForm>
          <Label> Product Price</Label>
          <Input type={"text"} placeholder={"click to enter"} />

          <Label>Discounted Price</Label>
          <Input
            type={"text"}
            ref={priceRef}
            onChange={() => {
              getPrice(priceRef.current.value);
            }}
            value={priceRef.current}
          />
        </FeatureForm>
      </FeaturesContainer>
    </>
  );
};

export default Price;
