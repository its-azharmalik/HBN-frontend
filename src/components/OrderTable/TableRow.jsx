import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import OptionVector from "../../assets/images/optionvector.png";
const TableRow = ({ProductName,ProductDesc,ID,Paid,Total,Deliverd }) => {

  const TD = styled.td`
    padding: 12px 15px;
    border-top: 1px solid #b5bdc4;
    border-bottom: 1px solid #b5bdc4;
    font-weight: 500;
font-size: 12px;
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


  const OptionVec = styled.img``;
  const navigate = useNavigate()

  return (
    <TR>
      <TD >

        <TdContainer  onClick={()=>{
          console.log('first')
      navigate(`/orderdetail/${ID}`)
    }}>
          <Span></Span>
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
              {ProductName}
            </p>
            <p
              style={{
                color: "#B5BDC4",
                fontSize: "12px",
              }}
            >
              {ProductDesc}
            </p>
          </div>
        </TdContainer>

    
      </TD>
      <TD>{ID}</TD>
      <TD>{Paid}</TD>
      <TD>{Total}</TD>
      <TD>{Deliverd}</TD>


    </TR>
  );
};

export default TableRow;