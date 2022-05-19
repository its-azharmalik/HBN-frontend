import React from "react";
import styled from "styled-components";
import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";

const IngredientsBox = ({ detail, type, background }) => {
  const IngredientBox = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 12px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${background});
    &:hover {
      
      background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, #000000 100%), url(${background}); 
    }
    background-repeat: no-repeat;
    position: relative;
    top: 0;
    margin: 20px 0;
  `;
  const Ingredientdetail = styled.div`
    color: white;
    align-item: center;
    position: absolute;
    bottom: 90px;
    left: 10px;
    flex-wrap: wrap;
    padding: 0 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 15xpx;
    line-height: 18px;
    text-align: justify;
  `;
  const Ingredienttype = styled.p`
    color: white;
    position: absolute;
    bottom: 0px;
    left: 25px;

    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
  `;

  return (
    <IngredientBox>
      <Ingredientdetail>{detail}</Ingredientdetail>
      <Ingredienttype>{type}</Ingredienttype>
    </IngredientBox>
  );
};

export default IngredientsBox;
