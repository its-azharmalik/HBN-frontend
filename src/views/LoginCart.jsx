import React, { useRef } from "react";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import useStore from "../store";
import { loginSubmitHandeler } from "../Main/login";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

const LoginCart = () => {


  

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect location or provide fallback
  const from = location.state?.from || "/";

  const login = useStore((state) => state.login);
  const Cart = useStore((state) => state.Cart);
  const createCart = useStore((state) => state.createCart);

  const loginError = useStore((state) => state.LoginError);

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
    }
  `;
  const Title = styled.p`
    marginbottom: 0px;
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 585px) {
      font-size: 20px;
    }
  `;
  const InnerTitle = styled.p`
    margintop: 0px;
    font-size: 16px;
    @media (max-width: 585px) {
      font-size: 14px;
    }
  `;
  const Span = styled.div`
    border-bottom: 1.5px solid #d1d4d9;
    margin: 40px 0;
    line-height: 0.1em;
    @media (max-width: 585px) {
    }
  `;
  const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const LoginInput = styled.input`
    background: #f9fafa;
    border-radius: 4px;
    border: 1px solid #b5bdc4;
    margin-bottom: 5px;
    height: 35px;
  `;
  const InputLabel = styled.label`
    text-align: left;
    margin: 5px 0;
  `;
  const Check = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
  `;
  const StrikeHead = styled.span`
    background: #fff;
    padding: 0 10px;
    @media (max-width: 585px) {
      padding: 0px;
    }
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
  const FPass = styled.p`
    color: #f9c349;
    font-size: 14px;
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
  const ErrorBox = styled.div`
    width: 100%;
    padding: 20px 0;
    background: #f7595c;
    color: white;
    border-radius: 12px;
  `;


  return (
    <>
    {checkAuth() ? <Navigate to={from} replace /> :
    <>

      <BoxContainer>
        <Box>
          {loginError ? <ErrorBox>{loginError}</ErrorBox> : ""}
          <Title>Welcome to Hellboy Protiens</Title>
          <InnerTitle>Login to your Account</InnerTitle>
          <Span>
            <StrikeHead>
              Don't Have a password? Continue with your Email ID
            </StrikeHead>
          </Span>
          <LoginForm
            onSubmit={(e) => {
              e.preventDefault();
              loginSubmitHandeler(
                emailRef.current.value,
                passwordRef.current.value,
                login,
                navigate,
                createCart,
                Cart,
                from
              );
            }}
          >
            
            <InputLabel>Email</InputLabel>
            <LoginInput type="email" ref={emailRef} />
            <InputLabel>Password</InputLabel>
            <LoginInput type="password" ref={passwordRef} />
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
            <FPass>I forgot my password</FPass>
            <CheckoutButton type="submit">Sign In</CheckoutButton>
          </LoginForm>
        </Box>
      </BoxContainer>
    </>  }
    </>
 
    
  );
};

export default LoginCart;
