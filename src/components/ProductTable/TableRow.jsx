import React from "react";
import styled from "styled-components";
import OptionVector from "../../assets/images/delete.png";
const TableRow = ({ name, Desc, stock, quantity, Date, Rating,Action, handleDeleteProduct, id, pid, fpid, productUrl }) => {
  const TD = styled.td`
    padding: 12px 15px;
    border-top: 1px solid #b5bdc4;
    border-bottom: 1px solid #b5bdc4;
  `;
  const TdContainer = styled.div`
    display: flex;
    // justify-content: space-between;
    align-items: center;
  `;
  const Span = styled.span`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    width: 65px;
    height: 65px;
    border-radius: 10px;
    margin-right: 20px;
  `;
  const TR = styled.tr`
    border: 1px solid #b5bdc4;
    border-radius: 12px;
  `;
  const OptionButton = styled.div`
    height: 25px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 20px;
    cursor: pointer;
  `;
  const OptionVec = styled.img``;
  const Image = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 0.5rem;
  `;
  return (
    <TR>
      <TD>
        <TdContainer>
          <Image src={productUrl} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                margin: "0px",
                color: "#1E1810",
                fontSize: "16px",
              }}
            >
              {name}
            </p>
            <p
              style={{
                color: "#B5BDC4",
                fontSize: "12px",
              }}
            >
              {Desc}
            </p>
          </div>
        </TdContainer>
      </TD>
      <TD style={{color:'#007D1E'}}>{stock}</TD>
      <TD>{quantity}</TD>
      <TD>{Date}</TD>
      <TD>{Rating}</TD>
      <TD>{Action}</TD>
      <TD>
        <OptionButton>
          <OptionVec src={OptionVector} onClick={()=>{
            if(id != null){
              handleDeleteProduct(id);
            } else {
              handleDeleteProduct(pid, fpid);
            }
          }} />
        </OptionButton>
      </TD>
    </TR>
  );
};

export default TableRow;