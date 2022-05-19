import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import ReactStars from "react-rating-stars-component";
const ReviewCard = ({review}) => {
  const CardContainer = styled.div`
    margin-bottom: 20px;
  `;
  const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
  `;
  const UserName = styled.p`
    font-weight: 400;
    font-size: 16px;
    margin: 0 10px;
  `;
  const ReviewStarContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const ReviewHead = styled.p`
    margin: 0 10px;
    font-weight: 700;
    font-size: 16px;
  `;
  const ReviewDate = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #567db9;
    margin: 5px 0;
  `;
  const Review = styled.p`
    font-weight: 400;
    font-size: 14px;
  `;
  const HelpfulButton = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    min-width: 100px;
    border-radius: 35px;
    border: 1px solid black;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
  `;
  const ButtonDivider = styled.p`
    margin: 0 15px;
    font-size: 20px;
  `;
  const ReportButton = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 12px;
  `;
  return (
    <>
      <CardContainer>
        <AvatarContainer>
          <Avatar size={40} icon={<UserOutlined />} />
          <UserName>{review.user_id.name}</UserName>
        </AvatarContainer>
        <ReviewStarContainer>
          <ReactStars edit={false} value={review.rating} />

        </ReviewStarContainer>
        <ReviewDate>Reviewed on 18 April 2022 </ReviewDate>
        <Review>
        {review.review_desc}
        </Review>
        <ButtonContainer>
          <HelpfulButton>Helpfull</HelpfulButton>
          <ButtonDivider>|</ButtonDivider>
          <ReportButton>Report Abuse</ReportButton>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};

export default ReviewCard;
