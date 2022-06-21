import React, { useEffect, useState } from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import TableRow from "../components/UserTable/TableRow";
import img from "../assets/images/Read.png";
import authCodes from "../assets/authenticityCodes";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Result } from "antd";
import Loading from "../components/Atoms/Loading";
import { Alert } from "antd";
import useStore from "../store";

const Read = () => {
  const setActiveNav = useStore((state) => state.setActiveNav);
  useEffect(() => {
    setActiveNav("/authenticity");
  });

  const [loading, setLoading] = useState(false);
  const authCodeInputRef = useRef();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const authLoopFunction = () => {
    let flag = false;
    authCodes.map((authCode) => {
      if (authCode.Code === authCodeInputRef.current.value) {
        flag = true;
        return flag;
      }
    });
    return flag;
  };

  const handleCheckAuthenticity = async () => {
    setLoading(true);
    const result = await authLoopFunction();
    if (result) {
      // logic to display something cool
      // setSuccess(true);
      toast.success("This Product is Genuine, from Hell Boy Nutrition");
      // setTimeout(() => {
      //     setSuccess(false);
      // }, 5000);
      // setLoading(false)
    } else {
      // logic to display something error
      setFailure(true);
      toast.error(
        "Not a Genuine Product, Please either check the code again or You've a product not from us."
      );
      // setTimeout(() => {
      //     setFailure(false);
      // }, 5000);
      // setLoading(false)
    }
  };
  const Container = styled.div`
    width: 80%;
    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-item: center;
    justify-content: center;
  `;
  const Img = styled.img`
    width: 90%;
  `;
  const ChecklistContainer = styled.div`
    background: rgba(249, 195, 73, 0.1);
    border-radius: 9px;
    padding: 2.5rem;
    margin-top: 3rem;
  `;
  const Title = styled.p`
    font-weight: 700;
    font-size: 25px;
  `;
  const Ul = styled.ul``;
  const Li = styled.li``;
  const Para = styled.div`
    margin-top: 2rem;
  `;
  const CheckBoxCon = styled.div`
    display: flex;
    border: 1px solid #b5bdc4;
    padding: 5px;
    border-radius: 22px;
    width: 20rem;
    margin: 50px auto;
    justify-content: center;
    background: white;
    align-items: center;
  `;

  const CheckInput = styled.input`
    height: 1rem;
    width: 70%;
    border: 2px solid #b5bdc4;
    border: none;
    border-right: none;
    font-size: 20px;
    outline: none;
    margin: 5px 5px;
  `;
  const CheckBtn = styled.div`
    color: white;
    background: #f9c349;
    border-radius: 22px;
    width: 6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
  `;

  const Div = styled.div`
    display: flex;
  `;

  return (
    <>
      <Container>
        <ImgContainer>
          <Img src={img} />
        </ImgContainer>
        <ChecklistContainer>
          <Title>AUTHENTICITY CHECKLIST</Title>
          <Ul>
            <Li>Product should have printed Expiry Date and Batch Number</Li>
            <Li>Tax Paid Retail Invoice should be provided by the seller</Li>
            <Li>Seller should be certified by Hell Boy Nutrition</Li>
          </Ul>
          <Para>
            <p>Why Hell Boy Nutrition?</p>
            <p>
              At hellboynutrition.com, we strive to provide 100% authentic
              products to our customers by maintaining tight quality control
              during sourcing and distribution of supplements
            </p>
          </Para>

          <Para>
            Know if your Hell Boy Nutrition product is authentic?
            <br />
            <br />
            ENTER THE CODE MENTIONED ON THE STICKER PLACED ON YOUR PRODUCT:
          </Para>

          <Div>
            <CheckBoxCon>
              <CheckInput placeholder="XXTTZZ" ref={authCodeInputRef} />
              <CheckBtn
                onClick={(e) => {
                  e.preventDefault();
                  handleCheckAuthenticity();
                }}
              >
                Check
              </CheckBtn>
            </CheckBoxCon>
          </Div>
        </ChecklistContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Read;
