import React from "react";
import styled from "styled-components";
import OptionVector from "../../assets/images/optionvector.png";
const TableRow = ({ name, role, date, value, phone, email }) => {
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
    background: #f4f4f5;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 20px;
    cursor: pointer;
  `;
  const OptionVec = styled.img``;
  return (
    <TR>
      <TD>
        <TdContainer>
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
              {name}
            </p>
            <p
              style={{
                color: "#B5BDC4",
                fontSize: "12px",
              }}
            >
              {phone}
            </p>
          </div>
        </TdContainer>
      </TD>
      <TD>{role}</TD>
      <TD>{date}</TD>
      <TD>{value}</TD>
      <TD>
        <OptionButton>
          <OptionVec src={OptionVector} />
        </OptionButton>
      </TD>
    </TR>
  );
};

export default TableRow;
