import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MassGainer5Kg from "../../assets/images/Massgainer5kg.png";
import Sale from "../../assets/images/sale-banner.png";
import CartIcon from "../../assets/images/cart1.png";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

function ProductCard({ type, title, originalPrice, price, productImage, id, fpidFromProductPage }) {
  const Navigate = useNavigate();
  const getProductById = useStore((state) => state.getProductById);
  const [product, setProduct] = useState({});
  // useEffect(() => {
  //   const get = async () => {
  //     const pr = await getProductById(id);
  //     setProduct(pr);
  //   };
  //   get();
  // }, []);
  const CardContainer = styled.div`
    border: 1px solid #e5e5e5;
    width: 250px;
    height: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 12px -4px rgba(22, 34, 51, 0.12),
        0px 16px 32px rgba(22, 34, 51, 0.16);
    }
  `;
  const CardTopContainer = styled.div`
    width: 100%;
  `;
  const CardProductDetailsContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    height: 30%;
    width: 100%;
    padding: 10px;
    position: relative;
  `;
  const ProductType = styled.p`
    font-size: 12px;
    color: rgba(181, 189, 196, 1);
    font-weight: 700;
    margin: 0;
  `;
  const ProductName = styled.p`
    font-weight: 500;
    font-size: 16px;
  `;
  const PriceLabel = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #b5bdc4;
    margin: 0;
  `;
  const Price = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0;
  `;
  const StrikedPrice = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #b5bdc4;
    text-decoration: line-through;
    margin: 0 10px;
  `;
  const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: max-content;
    align-items: center;
  `;
  const CartButton = styled.img`
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  `;
  const ProductImage = styled.img`
    object-fit: cover;

    width: 100%;
  `;
  return (
    <CardContainer
      onClick={() => {
        Navigate(`/product-info/${id}/${fpidFromProductPage}`);
      }}
    >
      <CardTopContainer>
        <img src={Sale} />
      </CardTopContainer>
      <ProductImage src={productImage} alt="" />
      <CardProductDetailsContainer>
        <ProductType>{type}</ProductType>
        <ProductName>{title}</ProductName>
        <PriceLabel>Price:</PriceLabel>
        <PriceContainer>
          <Price>{`Rs. ${price}`}</Price>
          <StrikedPrice>{`Rs. ${originalPrice}`}</StrikedPrice>
        </PriceContainer>
        <CartButton src={CartIcon} />
      </CardProductDetailsContainer>
    </CardContainer>
  );
}

export default ProductCard;
