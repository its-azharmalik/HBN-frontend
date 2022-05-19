import React, { useEffect } from "react";
import styled from "styled-components";

const Details = ({ getDetails, nameRef, detailsRef, weightRef, mainUrlRef }) => {


  // useEffect(() => {
  //   // if(product){
  //   //   // auto fill in all the details
  //   // }

    

  // }, []);

  

      // getDetails(nameRef.current?.value, detailsRef.current?.value, weightRef.current?.value, mainUrlRef.current?.files[0]);





  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
    margin: 1px;
  `;
  const DetailsContainer = styled.div``;
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
    @media (max-width: 585px) {
      background: #ffffff;
    }
  `;
  const DetailForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    @media (max-width: 585px) {
      margin: auto;
    }
  `;

  
  return (
    <>
      <DetailsContainer>
        <DetailForm>
          <Heading>Product Details</Heading>
          <Label>Product Name</Label>
          <Input
            type={"text"}
            ref={nameRef}
  
          />
          <Label>Overview</Label>
          <Input
            type={"text"}
            ref={detailsRef}
          />
          <Label>Weight in kg</Label>
          <Input type={"Number"} ref={weightRef}  />
          <Label>Upload Main Photo</Label>
          <Input ref={mainUrlRef} type={"file"} />
        </DetailForm>
      </DetailsContainer>
    </>
  );
};

export default Details;
