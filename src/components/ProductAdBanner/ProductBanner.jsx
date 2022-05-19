import React from "react";
import styled from "styled-components";
import LeanGainerProduct from "../../assets/images/leangainer.png";
import PrimaryButton from "../Atoms/Primary Button/PrimaryButton";
import dot from "../../assets/images/Ellipse3.png";
import { Link } from "react-router-dom";

function ProductBanner({ img, title, disc }) {
  const MainHeadContainer = styled.div`
    width: 100vw;
  `;
  const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 350px;

    @media (max-width: 585px) {
      height: auto;
      flex-direction: column;
    }
  `;
  const ProdBanner = styled.div`
    background-color: rgba(249, 195, 73, 0.1);
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    border-radius: 10px;
    font-size: 1.8vw;
    padding: 20px;
    width: 40%;
    min-width: 400px;
    @media (max-width: 850px) {
      font-size: 1.2vw;
    }
    @media (max-width: 1200px) {
      dipaly: none;
    }
    @media (max-width: 585px) {
      margin: auto;
    }
  `;
  const PordBannerDisc = styled.ul`
    // padding: 20px;
    font-size: 1rem;
    max-width: 30rem;

    // list-style: none; /* Remove default bullets */
  `;

  const Li = styled.li`
    font-size: 14px;
    padding: 5px 0;
    @media (max-width: 1035px) {
      font-size: 12px;
    }

    @media (max-width: 850px) {
      font-size: 12px;
    }
    @media (max-width: );
  `;
  const BannerTitle = styled.p`
    font-size: 2vw;
    font-weight: bolder;
    max-width: 30rem;
    padding: 20px;

    @media (max-width: 1035px) {
      font-size: 2.3vw;
    }
    @media (max-width: 850x) {
      font-size: 1vw;
    }
    @media (max-width: 585px) {
      font-size: 20px;
    }
    @media (max-width: 415px) {
      font-size: 16px;
    }
  `;
  const BannerImage = styled.img`
    margin: 20px;
    width: 30vw;
    height: 30vw;
    @media (max-width: 750px) {
      margin: auto;
      width: 199px;
      height: 233px;
    }
  `;
  return (
    <Container>
      <BannerImage src={img} alt="" />
      <ProdBanner>
        <BannerTitle>{title}</BannerTitle>
        <PordBannerDisc>
          <Li
            style={{
              listStyleImage: dot,
            }}
          >
            Helps in building lean muscles





          </Li>
          <Li>
            It is rich in protein supplement with a great taste that provides a
            rapid increase in strength
          </Li>
          <Li>
          It is an ideal supplement, which aids in providing speed muscle recovery and repair after every workout session

          </Li>
          <Li>
          It contains whole grain carbohydrate blend and zero sugar

          </Li>
          <Li>
It contains Creatine Ethyl Ester that helps in clean muscle bulking

          </Li>
        </PordBannerDisc>
        <Link to={"/products"} style={{marginLeft: '20px', marginTop: '10px' }}>
          <PrimaryButton btnText={"Shop Now"} />
        </Link>
      </ProdBanner>
    </Container>
  );
}

export default ProductBanner;
