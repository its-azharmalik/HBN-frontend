import React from "react";
import styled from "styled-components";
import upload from "../../assets/images/UploadVector.png";

const ProdImages = () => {
  const Heading = styled.p`
    font-weight: 500;
    font-size: 24px;
  `;
  const ImageDetailContainer = styled.div``;
  const Instructions = styled.p`
    font-weight: 500;
    font-size: 12px;
  `;
  const UploadVector = styled.img``;
  const ImageUploadContainer = styled.div`
    display: flex;
  `;
  const UplaodBox = styled.div`
    background: #c4c4c4;
    border-radius: 6px;
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  `;

  return (
    <>
      <ImageDetailContainer>
        <Heading>Upload Images</Heading>
        <Instructions>
          Instructions Instructions Instructions Instructions Instructions
          Instructions Instructions Instructions Instructions Instructions
          Instructions Instructions Instructions Instructions Instructions
          Instructions Instructions Instructions Instructions Instructions
          Instructions Instructions{" "}
        </Instructions>
        <ImageUploadContainer>
          <UplaodBox>
            <UploadVector src={upload} />
          </UplaodBox>
          <UplaodBox>
            <UploadVector src={upload} />
          </UplaodBox>
          <UplaodBox>
            <UploadVector src={upload} />
          </UplaodBox>
          <UplaodBox>
            <UploadVector src={upload} />
          </UplaodBox>
        </ImageUploadContainer>
      </ImageDetailContainer>
    </>
  );
};

export default ProdImages;
