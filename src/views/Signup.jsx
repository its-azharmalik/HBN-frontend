import React, { useEffect, useRef } from "react";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import usestore from "../store";
import { signupSubmitHandler } from "../Main/login";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../components/Navbar/BottomNav";
import { checkAuth } from "../utils/checkAuth";
const Signup = () => {
  const signup = usestore((state) => state.register);
  const email = useRef();
  const userName = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const isAdmin = useRef();
  const fname = useRef();
  const lname = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect location or provide fallback
  const from = location.state?.from || "/";

  const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100;
   

  `;
  const Box = styled.div`
    text-align: center;
    // border-sizing: border-box;
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
  const Title = styled.p`
    marginbottom: 0px;
    font-size: 30px;
    font-weight: 700;
  `;
  const InnerTitle = styled.p`
    margintop: 0px;
    font-size: 16px;
  `;
  const Span = styled.div`
    border-bottom: 1.5px solid #d1d4d9;
    margin: 20px 0;
    line-height: 0.1em;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
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
  const Name = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  `;
  const Namein = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Formin = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const StrikeHead = styled.span`
    background: #fff;
    padding: 0 10px;
  `;
  const InputBtn = styled.div`

  background: #F9C349";
  border-radius: 6px;
  border: none;
  color: white;
  padding: 5px ;
  height: 35px;
  cursor: pointer;
`;


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
  return (
    <>
    {checkAuth() ? <Navigate to={from} replace /> : <><TopNav />
      <BoxContainer>
        <Box>
          <Title>Welcome to Hellboy Protiens</Title>
          <InnerTitle>Content content content contentcontentcontent</InnerTitle>
          <Span>
            <StrikeHead>Create Your Account</StrikeHead>
          </Span>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              signupSubmitHandler(
                `${fname.current.value} ${lname.current.value}`,
                email.current.value,
                userName.current.value,
                password.current.value,
                confirmPassword.current.value,
                true,
                signup, navigate
              );
            }}
          >
            <Name>
              <Namein>
                <Label>First Name</Label>
                <Input type="text" ref={fname} />
              </Namein>
              <Namein>
                <Label>Last Name</Label>
                <Input type="text" ref={lname} />
              </Namein>
            </Name>

            <Label>Email</Label>
            <Input type="email" ref={email} />
            <Label>Username</Label>
            <Input type="text" ref={userName} />
            <Label>Password</Label>
            <Input type="password" ref={password} />
            <Label>Confirm Password</Label>
            <Input type="password" ref={confirmPassword} />
            <CheckoutButton type="submit">Sign Up</CheckoutButton>
          </Form>
        </Box>
      </BoxContainer> 
      
      </>}
      
    </>
  );
};

export default Signup;
