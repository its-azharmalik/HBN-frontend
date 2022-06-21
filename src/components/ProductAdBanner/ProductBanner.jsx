import React from "react";
import styled from "styled-components";
import LeanGainerProduct from "../../assets/images/leangainer.png";
import PrimaryButton from "../Atoms/Primary Button/PrimaryButton";
import dot from "../../assets/images/Ellipse3.png";
import { Link } from "react-router-dom";
import useStore from "../../store";
import { checkAuth } from "../../utils/checkAuth";

function ProductBanner({ img, title, disc, rev }) {
  const addToCart = useStore((state) => state.addToCart);
  let guest = true;
  let AccessToken = undefined;
  if (checkAuth()) {
    guest = false;
  } else {
    guest = true;
    AccessToken = "538475934857947593ierh";
  }
  const pid1 = "628de37ebcbac516123944d9";
  const fpid1 = "628de3f5bcbac5161239456a";

  const pid2 = "628de0f0a95efeb655c84d33";
  const fpid2 = "628de0f3a95efeb655c84d53";
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
      flex-direction: ${rev ? "column-reverse" : "column"};
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
    width: 25vw;
    height: 30vw;
    max-width: 320px;
    max-height: 380px;
    @media (max-width: 820px) {
      margin: auto;
      width: 199px;
      height: 233px;
    }
    cursor: pointer;
  `;
  return (
    <React.Fragment>
      {rev ? (
        <Container>
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
                It is rich in protein supplement with a great taste that
                provides a rapid increase in strength
              </Li>
              <Li>
                It is an ideal supplement, which aids in providing speed muscle
                recovery and repair after every workout session
              </Li>
              <Li>It contains whole grain carbohydrate blend and zero sugar</Li>
              <Li>
                It contains Creatine Ethyl Ester that helps in clean muscle
                bulking
              </Li>
            </PordBannerDisc>

            <div
              onClick={() => {
                addToCart(fpid2, pid2, guest, AccessToken);
              }}
            >
              <PrimaryButton btnText={"Shop Now"} />
            </div>
          </ProdBanner>
          <Link to="/product-info/628de0f0a95efeb655c84d33/628de0f3a95efeb655c84d53">
            <BannerImage src={img} alt="" />
          </Link>
        </Container>
      ) : (
        <Container>
          <Link to="/product-info/628de37ebcbac516123944d9/628de3f5bcbac5161239456a">
            <BannerImage src={img} alt="" />
          </Link>
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
                It is rich in protein supplement with a great taste that
                provides a rapid increase in strength
              </Li>
              <Li>
                It is an ideal supplement, which aids in providing speed muscle
                recovery and repair after every workout session
              </Li>
              <Li>It contains whole grain carbohydrate blend and zero sugar</Li>
              <Li>
                It contains Creatine Ethyl Ester that helps in clean muscle
                bulking
              </Li>
            </PordBannerDisc>
            <div
              onClick={() => {
                addToCart(fpid1, pid1, guest, AccessToken);
              }}
            >
              <PrimaryButton btnText={"Shop Now"} />
            </div>
          </ProdBanner>
        </Container>
      )}
    </React.Fragment>
  );
}

export default ProductBanner;
