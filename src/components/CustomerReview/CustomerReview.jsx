import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/Ellipse1.png";
import img2 from "../../assets/images/Ellipse2.png";
import img3 from "../../assets/images/Ellipse3.png";
import ReactStars from "react-rating-stars-component";
import LArrow from "../../assets/images/Larrow.png";
import RArrow from "../../assets/images/Rarrow.png";

const CustomerRview = () => {
  const ReviewContainer = styled.div`
    // margin: 6rem;
    min-width: 300px;
  `;
  const ReviewBox = styled.div`
    width: 100%;
    // height: 753px;
    padding: 20px;
    background: #f4f4f6;
    border-radius: 12px;
    position: relative;
  `;

  const ReaviewHead = styled.h1`
    font-weight: 700;
    font-size: 3.5vw;
    line-height: 48px;
    text-align: center;
  `;
  const Reaviewp = styled.p`
    text-align: center;
  `;
  const InnerBox = styled.div`
    width: 65%;
    height: 65%;
    text-align: center;
    position: absolute;
    left: 17%;
    position: relative;
    margin: 0;
  `;

  const ReactStar = styled.div`
    display:flex;
    align-item:center;
    justify
  margin:auto;
    justify-content: space-between;
    `;
  const LeftArrow = styled.div``;
  const RightArrow = styled.div`
    border-radius: 60%;
  `;
  const Name = styled.p``;
  const ImagePrev = styled.img`
    position: absolute;
    top: 90px;
    left: 0px;
    width: 56px;
    height: 56px;

    @media (max-width: 695px) {
      display: none;
    }
  `;
  const ImageNext = styled.img`
    position: absolute;
    top: 20px;
    right: 0px;
    height: 37px;
    width: 37px;
    @media (max-width: 695px) {
      display: none;
    }
  `;
  const ImageMain = styled.img`
    margin: 0;
  `;
  return (
    <ReviewContainer>
      <ReviewBox>
        <ReaviewHead>What our customers say</ReaviewHead>
        <Reaviewp>
          Our clients send us bunch of smilies with our services and we love
          them
        </Reaviewp>
        <InnerBox>
          <ImagePrev src={img2} alt="img2" />
          <ImageNext src={img3} alt="img3" />

          <ImageMain src={img1} alt="jj" />
          <Name>Nishant Singh</Name>
          <p>Marketing</p>
          <ReactStar>
            <LeftArrow>
              <img src={LArrow} alt="" />
            </LeftArrow>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              style={{
                display: "flex",
                alignitem: "center",
              }}
            />
            <RightArrow>
              <img
                src={RArrow}
                alt=""
                style={{
                  cursor: "pointer",
                }}
              />
            </RightArrow>
          </ReactStar>

          <></>
          <>
            You’ll get the best of what you put in. The team is working at their
            best to provide us variety of space and homes. Had a great
            experience working with them Thanks a lot.
          </>
        </InnerBox>
      </ReviewBox>
    </ReviewContainer>
  );
};

{
  /* <></>
<>You’ll get the best of what you put in. The team is working at their <br/>
best to provide us variety of space and homes. Had a great<br/>
experience working with them
Thanks a lot.</>

  </InnerBox>
  </ReviewBox>
  )
} */
}

export default CustomerRview;
