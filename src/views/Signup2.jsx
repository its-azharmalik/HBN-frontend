import React from "react";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";

const Signup2 = () => {
  const BoxContainer = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  const Box = styled.div`
    text-align: center;
    border-sizing: border-box;
    margin: 0px;
    border: 1px solid #d7d9d9;
    border-radius: 6px;
    padding: 30px;
    @media (max-width: 585px) {
      border: none;
      padding: 15px;
       margin-top:4em;
    }
  `;
  const Title=styled.p`
  marginBottom: 0px; font-size: 30px; font-weight: 700; 
  `
  const InnerTitle=styled.p`
 marginTop: 0px ;font-size: 16px; `
  const Span = styled.div`
    border-bottom: 1.5px solid #d1d4d9;
    margin: 20px 0;
    line-height: 0.1em;
  `;
  const Form = styled.form`
display:flex;
flex-direction:column;
align-item:left
flex-wrap:wrap;
`;
  const Input = styled.input`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
  `;
  const Label = styled.label`
    text-align: left;
    margin: 5px 0;
  `;
  const StrikeHead = styled.span`
    background: #fff;
    padding: 0 10px;
  `;
  const InputBtn=styled.div`

  background: #F9C349";
  border-radius: 6px;
  border: none;
  color: white;
  padding: 5px ;
  height: 35px;
  cursor: pointer;
`
const CheckoutButton = styled.button`
display: flex;
border: 2px solid #b5bdc4;
border-radius: 12px;
width: 100%;
margin: 30px auto;
justify-content: center;
align-items: center;
height: 50px;
padding: 5px 0;
background: #f9c349;
color: #ffffff;
font-weight: 500;
font-size: 18px;
cursor: pointer;
`;

const FPass = styled.p`
color: #f9c349;
font-size: 14px;
`;
const Check = styled.div`
text-align: left;
display: flex;
align-items: center;
`;
  return (
    <>

      <BoxContainer>
        <Box>
          <Title
          >
            Welcom to Hellboy Protiens
          </Title>
          <InnerTitle>
            Content content content contentcontentcontent
          </InnerTitle>
          <Span>
            <StrikeHead>Create Your Account</StrikeHead>
          </Span>
          <Form>
            <Label>Email</Label>
            <Input type="email" />
            <Label>password</Label>
            <Input type="email" />
            <Check>
              <input type="checkbox" />{" "}
              <p
                style={{
                  margin: "0 10px",
                }}
              >
                {" "}
                Remember me
              </p>
            </Check>
            <CheckoutButton type="submit">Continue</CheckoutButton>
            <FPass>I forgot my password</FPass>

          </Form>
        </Box>
      </BoxContainer>
    </>
  );
};

export default Signup2;
