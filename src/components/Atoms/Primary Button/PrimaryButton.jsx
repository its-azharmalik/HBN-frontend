import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ btnText, alignment }) => {
  const Button = styled.div`
    width: 180px;
    height: 60px;
    background: #f9c349;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 30px 0px rgba(249, 195, 73, 0.8);
    cursor: pointer;
    // margin-right: 0;
    // @media (max-width: 500px) {
    //   width: 100px;
    //   height: 50px;
    // }
  `;
  return <Button>{btnText}</Button>;
};

export default PrimaryButton;
