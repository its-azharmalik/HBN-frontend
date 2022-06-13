import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/Ellipse1.png";
import img2 from "../../assets/images/Ellipse2.png";
import img3 from "../../assets/images/Ellipse3.png";
import ReactStars from "react-rating-stars-component";
import LArrow from "../../assets/images/Larrow.png";
import RArrow from "../../assets/images/Rarrow.png";
import user from "../../assets/images/user.png";
import { useState } from "react";

const CustomerRview = () => {
  const [currentRev, setCurrentRev] = useState(1);
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
  const LeftArrow = styled.div`
    cursor: pointer;
  `;
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
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #f0ebeb;
  `;

  const homeReviews = [
    {
      id: 1,
      img: user,
      name: "Harsh Tiwari",
      stars: 5,
      review: "Great products at reasonable price. Awsome service. Must try.",
    },
    {
      id: 2,
      img: user,
      name: "Hammad Ahmed",
      stars: 4,
      review:
        "Fast Delivery good products..I speciallt liked the chocolate gainer",
    },
    {
      id: 3,
      img: user,
      name: "Nitish Sharma",
      stars: 4,
      review: "Loved the products....protein supplements are very effective",
    },
  ];
  return (
    <ReviewContainer>
      <ReviewBox>
        <ReaviewHead>What our customers say</ReaviewHead>
        <Reaviewp>
          Our clients send us bunch of smilies with our services and we love
          them
        </Reaviewp>

        {homeReviews.map((rev) => (
          <>
            {rev.id == currentRev ? (
              <InnerBox>
                {/* <ImagePrev src={img2} alt="img2" />
          <ImageNext src={img3} alt="img3" /> */}

                <ImageMain src={rev.img} alt="jj" />
                <Name>{rev.name}</Name>
                {/* <p>Marketing</p> */}
                <ReactStar>
                  <LeftArrow
                    onClick={() => {
                      if (currentRev > 1) {
                        setCurrentRev(currentRev - 1);
                      }
                    }}
                  >
                    <img src={LArrow} alt="" />
                  </LeftArrow>
                  <ReactStars
                    count={5}
                    value={rev.stars}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    style={{
                      display: "flex",
                      alignitem: "center",
                    }}
                  />
                  <RightArrow
                    onClick={() => {
                      if (currentRev < 3) {
                        setCurrentRev(currentRev + 1);
                      }
                    }}
                  >
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
                <p>{rev.review}</p>
              </InnerBox>
            ) : (
              ""
            )}
          </>
        ))}
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
