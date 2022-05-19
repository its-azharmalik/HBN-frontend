import React, { useEffect, useState } from "react";
import styled from "styled-components";
import massgainer from "../..//assets/images/Massgainer5kg.png";

const CartProduct = ({item, handleDeleteProductFromCart, handleQuantityChange, loading}) => {
  console.log(item)

  const [qty, setQty] = useState(item.quantity)

  useEffect(() => {
    if(qty != item.quantity){
      handleQuantityChange(item.featured_product_id._id, item.product_id._id, qty)
    }
  }, [qty])

  

  const CartProdContainer = styled.div`
    border: 1px solid #b5bdc4;
    box-sizing: border-box;
    border-radius: 12px;
    height: 150px;
    width: 100%;
    min-width: 320px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    // @media (max-width: 1256px) {
    //   height: 150px;
    //   width: 80%;
    // }
    `
  ;
  const CartContainer = styled.div`
    width: 100%;
    margin: auto;
    // border: 1px solid black;
    display: flex;
    margin: 10px 0;
  `;
  const ImageContainer = styled.div`
    height: 90%;
  `;
  const ProductImage = styled.img`
    object-fit: cover;
    height: 100%;
    margin-right: 20px;
  `;
  const DetailsContainer = styled.div`
    text-align: left;
  `;
  const DeleteButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  `;
  const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  `;
  const Price = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #b5bdc4;
  `;
  const QuantityDeleteContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  const Quantity = styled.div`
    width: 70px;
    height: 30px;
    border: 1px solid #b5bdc4;
    border-radius: 7px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const AddItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const RemoveItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const QValue = styled.p`
    margin: 0;
  `;
  return (
    <CartContainer>
      <CartProdContainer>
        <ImageContainer>
          <ProductImage src={item.product_id.main_url} />
        </ImageContainer>
        <DetailsContainer>
          <Title>{item.product_id.name} {item.featured_product_id.flavour} ( {item.product_id.weight}KG )</Title>
          <Price>Rs.{item.featured_product_id.price}.00</Price>
          <QuantityDeleteContainer>
            
             {loading ? 'Loading...' : <Quantity>
             <AddItem onClick={()=>{
                setQty(qty + 1)
              }}
              > + </AddItem>
              <QValue>{qty}</QValue>
              <RemoveItem onClick={()=>{
                if(qty > 1){
                  setQty(qty - 1)
                }
              }} > - </RemoveItem>
             
            </Quantity>}
            <DeleteButton onClick={()=>{
              handleDeleteProductFromCart(item.featured_product_id._id, item.product_id._id)
            }}>Delete</DeleteButton> 
          </QuantityDeleteContainer>
        </DetailsContainer>
      </CartProdContainer>
    </CartContainer>
  );
};

export default CartProduct;
