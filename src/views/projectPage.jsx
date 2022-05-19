import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import ProductImg from "../assets/images/Massgainer5kg.png";
import rightarr from "../assets/images/right-arrow.png";
import leftarr from "../assets/images/left-arrow.png";
import arrowup from "../assets/images/arrowup.png";
import arrowdown from "../assets/images/arrowdown.png";
import ReactStars from "react-rating-stars-component";
import { Button, Carousel, Divider } from "antd";
import Footer from "../components/Footer/Footer";
import ReviewCard from "../components/CustomerReview/ReviewCard";
import { Progress } from "antd";
import ProductCard from "../components/Product/ProductCard";
import MassGainer5KG from "../assets/images/Massgainer5kg.png";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useStore from "../store";
import { checkAuth } from "../utils/checkAuth";
import Loading from '../components/Atoms/Loading'
import { toast } from "react-toastify";
import NoDataFound from "../components/Atoms/NoDataFound";
import ReviewEditCard from "../components/CustomerReview/ReviewEditCard";

const ProductPage = ({fpidFromProductPage}) => {
  const [overviewFlag, setOverviewFlag] = useState(false);
  const [benefitsFlag, setBenefitsFlag] = useState(false);
  const [ingredientFlag, setIngredientFlag] = useState(false);

  const reviewSubmitRef = useRef();

  let [qty, setQty]  = useState(1);

  const param = useParams();

  const getProductById = useStore((state) => state.getProductById);
  const getFeaturedProdBYid = useStore((state) => state.getFeaturedProdById);
  const getReviewById = useStore((state) => state.getAllReviewsById);
  const fetchUser = useStore((state)=> state.fetchUser);
  const addReviewsById = useStore((state)=> state.addReviewsById);
  const user = useStore((state) => state.LoginUser);
  const addToCart = useStore((state) => state.addToCart);
  const AllReviews = useStore((state) => state.AllReviewsById);
  const ProductById = useStore((state) => state.Product);


  const [product, setProduct] = useState({});
  const [featuredproduct, setFeaturedProduct] = useState({});

  const [featuredProductList, setFeaturedProductList] = useState();
  const [reviewData, setReviewData] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true)
  const [loadingReview, setLoadingReview] = useState(true)
  const [reviewNotFound, setreviewNotFound] = useState(null)

  const navigate = useNavigate();

  const get = async () => {
    setLoading(true)
      const pr = await getProductById(param.id);
      setProduct(pr);
      const fpr = await getFeaturedProdBYid(
        param.id,
        param.fpidFromProductPage
      );
      setFeaturedProduct(fpr);
      setFeaturedProductList(pr.featured_product_id)  
      setLoading(false)
  }

  const getReviews = async () => {
    setLoadingReview(true)
    const reviews = await getReviewById(param.id)
    if(reviews.response?.status == 404){
      setreviewNotFound(reviews.response.data.message);
      setLoadingReview(false)
    }
    if(reviews.status != 500 || reviews.status != 404){
      setReviewData(reviews.data?.data)
      setLoadingReview(false)
    }
  }

  const fetchCurrentUser = async () => {
    if(checkAuth()){
      const user = await fetchUser();
      setUserData(user.data.data);
    } else {
      navigate('/login')
    }
  }
 
  useEffect(() => {
      fetchCurrentUser();
      get();
      getReviews();
  }, []);

  const [starCount, setStarCount] = useState(0)
  const [starCount1, setStarCount1] = useState(0)
  const [starCount2, setStarCount2] = useState(0)
  const [starCount3, setStarCount3] = useState(0)
  const [starCount4, setStarCount4] = useState(0)
  const [starCount5, setStarCount5] = useState(0)

  // review counter system
  useEffect(() => {
    let count = 0
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0
    reviewData?.map((review)=>{
      if(review.rating == 1){
        count1 += 1
      }
      if(review.rating == 2){
        count2 += 1
      }
      if(review.rating == 3){
        count3 += 1
      }
      if(review.rating == 4){
        count4 += 1
      }
      if(review.rating == 5){
        count5 += 1
      }
      count += review.rating  
    })
    setStarCount(count)
    setStarCount1(count1)
    setStarCount2(count2)
    setStarCount3(count3)
    setStarCount4(count4)
    setStarCount5(count5)
  }, [reviewData])


  const handleAddToCart = async () => {
    if(checkAuth()){
      const pid = product?._id
      const fpid = featuredproduct.gotFeaturedProductById?._id
      const result = await addToCart(fpid, pid, qty)
      if(result.staus != 404 || result.status != 500){
        toast.success("Product Successfully Added to Cart")
        navigate("/cart")
      } else {
        toast.error(result.data.message)

      }
    } else {
      navigate("/login")
    }
  }

  const [ratingStars, setRatingStars] = useState(4)

  const handleSubmitReview = async () => {
    const pid = product?._id
    const fpid = featuredproduct.gotFeaturedProductById?._id
    const config = {
      rating: ratingStars,
      review_desc : reviewSubmitRef.current?.value
    }
    if(reviewSubmitRef.current?.value != '' && reviewSubmitRef.current?.value && reviewSubmitRef.current?.value.length > 5){
      const result = await addReviewsById(pid, config)
      if(result.status != 404 || result.status != 500){
        toast.success(result.data.message)
      }
    }
    else {
      toast.error("Write Something to submit a review, atleast 3 words")
    }
  }





  const MainContainer = styled.div`
    height: max-content;
  `;
  const Container = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    height: max-content;
    @media (max-width: 810px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  `;
  const ProductContainerLeft = styled.div`
    margin: none;
    padding: 2vw;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    border-radius: 12px;
    flex-direction: column;
  `;
  const ProductImageContainer = styled.div`
    background: #fef9ed;
    width: 27rem;
    heigth: 27rem;
    padding: 1vw;
    border-radius: 12px;
    margin-bottom: 20px;
  `;
  const Overview = styled.div`
    background: #fef9ed;
    width: 30vw;
    padding: 1vw;
    display: flex;
    justify-content: space-between;
    align-item: center;
    border-radius: 12px;
    flex-direction: column;
    margin-bottom: 20px;
    min-width: 300px;
  `;
  const ProductImage = styled.img`
    background: none;
    min-height: 90%;
    min-width: 90%;
    object-fit: cover;
  `;
  const Arrow = styled.img`
    height: 33px;
    width: 33px;
    cursor: pointer;
  `;
  const Imageslide = styled.div`
    display: flex;
    overflow: hidden;
  `;
  const ArrowUp = styled.img`
    cursor: pointer;
  `;
  const ArrowDown = styled.img`
    cursor: pointer;
  `;

  const OverviewTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `;
  const OverviewTitle = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  `;
  const ProductContainerRight = styled.div`
    // background: #fef9ed;
    // width: 30vw;
    padding: 2vw;
    display: flex;
    // justify-content: space-between;
    // align-item: center;
    border-radius: 12px;
    flex-direction: column;
    // height: 400px;
    min-width: 300px;
  `;
  const DetailTitle = styled.p`
    font-weight: 700;
    font-size: 3vw;
    @media (max-width: 650px) {
      font-size: 20px;
    }
  `;
  const Price = styled.div`
    display: flex;
    font-size: 24px;
    align-items: center;
  `;
  const SavePrice = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #007d1e;
    margin-left: 3vw;
  `;
  const DiscountPrice = styled.p`
    font-size: 24px;
  `;
  const StrikedPrice = styled.p`
    color: #b5bdc4;
    text-decoration: line-through;
    font-size: 24px;
    margin-right: 1vw;
  `;
  const FeatureButton = styled.div`
    background: #f9c349;
    width: 10vw;
    height: 3vw;
    border-radius: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.5vw;
    margin-right: 10px;
    min-width: 80px;
    min-height: 25px;
    cursor: pointer;
  `;
  const FeatureContainer = styled.div`
    display: flex;
  `;
  const RatingContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const Reviews = styled.p`
    color: #f9c349;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    margin-left: 10px;
  `;
  const MoreFeatures = styled.div`
    min-width: 300px;
  `;
  const FeatureLI = styled.p`
    margin: 0;
  `;
  const AddItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const RemoveItem = styled.p`
    margin: 0;
    cursor: pointer;
  `;
  const QValue = styled.p`
    margin: 0;
  `;
  const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const QuantityText = styled.p`
    font-weight: 500;
    font-size: 18px;
  `;
  const Quantity = styled.div`
    width: 70px;
    height: 30px;
    border: 1px solid #b5bdc4;
    border-radius: 7px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;
  const AddToBasketButton = styled.div`
    background: #f9c349;
    border-radius: 12px;
    width: 14vw;
    min-width: 150px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.5vw;
    color: #ffffff;
    @media (max-width: 810px) {
      font-size: 16px;
    }
    cursor: pointer;
  `;
  const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const ReviewContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 20px auto;
  `;
  const ReviewTitle = styled.p`
    font-weight: 700;
    font-size: 3vw;
  `;
  const MainReviewBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 930px) {
      flex-direction: column;
      justify-content: center;
    }
  `;
  const ReviewBarContainer = styled.div`
    width: 25vw;
    min-width: 300px;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
  `;
  const ReviewCardConatiner = styled.div`
    width: 50vw;
    min-width: 300px;
    @media (max-width: 930px) {
    }
    // border: 1px solid black;
  `;
  const ReviewStarContainer = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #fef9ed;
    margin: 0 auto;
    border-radius: 45px;
  `;
  const StarCount = styled.p`
    margin: 0 10px;
    font-weight: 500;
    font-size: 16px;
  `;
  const CustomerCount = styled.p`
    margin: 10px auto;
    font-weight: 500;
    font-size: 16px;
    color: #b5bdc4;
  `;
  const ReviewBar = styled.div`
    width: 90%;
    margin: 10px auto;
  `;
  const StarProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Star = styled.p`
    margin-bottom: 0;
    width: 60px;
    font-weight: 500;
    font-size: 12px;
  `;
  const SeeAllButton = styled.p`
    font-weight: 500;
    font-size: 16px;
  `;
  const OtherCustomerBroughtTitle = styled.p`
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  `;
  const OtherProductContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;

    // align-items: center;
  `;
  const ProductContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `;

  const ReviewSubmitButton = styled.a`
  
  `

  const ReviewSubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `

  const handleFeatureChnage = async (fp) => {
    
    // get featured product and set it
    setLoading(true);
    const fpr = await getFeaturedProdBYid(
      param.id,
      fp._id
    );
    setFeaturedProduct(fpr);
    setLoading(false)
      console.log(fpr)
  }

  console.log(featuredproduct)

  return (
    <React.Fragment>


    {loading ? <Loading /> : <> 
    

      <MainContainer>
        <Container>
          <ProductContainerLeft>
            <ProductImageContainer>
              {/* <Arrow src={leftarr} /> */}
              
                <Carousel autoplay dotPosition={'left'} effect="fade">

                {featuredproduct?.gotFeaturedProductById?.url.map((imgUrl)=>(<ProductImage src={imgUrl} />))}
                </Carousel>
              
              {/* <Arrow src={rightarr} /> */}
            </ProductImageContainer>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Overview</OverviewTitle>
                <ArrowUp
                  src={overviewFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setOverviewFlag(!overviewFlag);
                  }}
                />
              </OverviewTitleContainer>
              {overviewFlag ? <p>{product.details}</p> : ""}
            </Overview>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Benefits</OverviewTitle>
                <ArrowUp
                  src={benefitsFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setBenefitsFlag(!benefitsFlag);
                  }}
                />
              </OverviewTitleContainer>
              {benefitsFlag ? (
                <p>
                  {featuredproduct?.gotFeaturedProductById?.benefits}
                </p>
              ) : (
                ""
              )}
            </Overview>
            <Overview>
              <OverviewTitleContainer>
                <OverviewTitle>Ingredients</OverviewTitle>
                <ArrowUp
                  src={ingredientFlag ? arrowup : arrowdown}
                  onClick={() => {
                    setIngredientFlag(!ingredientFlag);
                  }}
                />
              </OverviewTitleContainer>
              {ingredientFlag ? (
                <p>
                  {featuredproduct?.gotFeaturedProductById?.ingredients}

                </p>
              ) : (
                ""
              )}
            </Overview>
          </ProductContainerLeft>
          <ProductContainerRight>
            <DetailTitle>{product?.name}</DetailTitle>
            <DetailTitle>{featuredproduct?.gotFeaturedProductById?.flavour}</DetailTitle>
            <Price>
              <StrikedPrice>Rs. {featuredproduct?.gotFeaturedProductById?.price}</StrikedPrice>
              <DiscountPrice>Rs. {featuredproduct?.gotFeaturedProductById?.discounted_price}</DiscountPrice>
              <SavePrice>Save Rs. {featuredproduct?.gotFeaturedProductById?.price - featuredproduct?.gotFeaturedProductById?.discounted_price}</SavePrice>
            </Price>
            <FeatureContainer>

{featuredProductList?.map(fp=>(  <FeatureButton onClick={()=>{
  handleFeatureChnage(fp);
}}>{fp.flavour}</FeatureButton>
))}

               
             
            </FeatureContainer>
            <RatingContainer>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={32}
                value={Math.floor(starCount/reviewData?.length)}
                edit={false}
                activeColor="#ffd700"
                style={{
                  display: "flex",
                  alignitem: "center",
                }}
              />
              <Reviews>{reviewData?.length} Reviews</Reviews>
            </RatingContainer>
            <Divider />
            <MoreFeatures>
                {featuredproduct?.gotFeaturedProductById?.description}
              <FeatureLI>Excellent plant-based protein source.</FeatureLI>{" "}
              <FeatureLI>High protein</FeatureLI>
              <FeatureLI>Low in carbs</FeatureLI>
              <FeatureLI>Suitable for people with type 2 diabetes</FeatureLI>
              <FeatureLI>
                Suitable for people who follow a low-carb diet
              </FeatureLI>
              <FeatureLI>Good source of healthy fats</FeatureLI>
              <FeatureLI> High in healthy vitamins and minerals</FeatureLI>
              <FeatureLI>Rich in antioxidants</FeatureLI>
              <FeatureLI>Rich in nutrients</FeatureLI>
              <FeatureLI> A decent protein source</FeatureLI>
              <FeatureLI>Rich in fibre</FeatureLI>
              <FeatureLI>Potential source of aflatoxins</FeatureLI>
            </MoreFeatures>
            <Divider />
            <BottomContainer>
              <QuantityContainer>
                <QuantityText>Quantity</QuantityText>
                <Quantity>
                  <AddItem onClick={(e)=>{
                    e.preventDefault();
                    setQty(qty + 1)
                  }
                  }> + </AddItem>
                  <QValue>{qty}</QValue>
                  <RemoveItem onClick={(e)=>{
                    e.preventDefault();
                    if(qty > 1){
                      setQty(qty - 1)
                    }
                  }}> - </RemoveItem>
                </Quantity>
              </QuantityContainer>
              <AddToBasketButton
              onClick={() => {
                handleAddToCart();
              }}
              >
                Add to Basket
              </AddToBasketButton>
            </BottomContainer>
          </ProductContainerRight>
        </Container>
        <Divider />
        {loadingReview ? <Loading /> : <ReviewContainer>
          <ReviewTitle>Customer Review</ReviewTitle>
          {reviewData ? 
          <MainReviewBox>
            <ReviewBarContainer>
              <ReviewStarContainer>
                <ReactStars  count={5} size={20} value={Math.floor(starCount/reviewData.length)} edit={false} />
                <StarCount>{Math.floor(starCount/reviewData.length)} Starts out of 5</StarCount>
              </ReviewStarContainer>
              <CustomerCount>{reviewData.length} Customer reviews</CustomerCount>
              <ReviewBar>
                <StarProgress>
                  <Star>5 Star</Star>
                  <Progress
                    percent={Math.floor((starCount5/reviewData.length)*100)}
                    strokeColor={"#FFB100"}
                    style={{ width: "50%" }}
                    showInfo={false}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>4 Star</Star>
                  <Progress
                    percent={Math.floor((starCount4/reviewData.length)*100)}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>3 Star</Star>
                  <Progress
                    percent={Math.floor((starCount3/reviewData.length)*100)}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>2 Star</Star>
                  <Progress
                    percent={Math.floor((starCount2/reviewData.length)*100)}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
                <StarProgress>
                  <Star>1 Star</Star>
                  <Progress
                    percent={Math.floor((starCount1/reviewData.length)*100)}
                    strokeColor={"#FFB100"}
                    showInfo={false}
                    style={{ width: "50%" }}
                  />
                </StarProgress>
              </ReviewBar>
            </ReviewBarContainer>

            <ReviewCardConatiner>
              {reviewData.map((review, index)=>(<ReviewCard review={review} key={index} />))}
              
              <Divider />

              <ReviewEditCard reviewSubmitRef={reviewSubmitRef} handleSubmitReview={handleSubmitReview} userData={userData} setRatingStars={setRatingStars} ratingStars={ratingStars} />
              <Divider />

              <SeeAllButton>See all reviews </SeeAllButton>
            </ReviewCardConatiner>
          </MainReviewBox> 
          : <NoDataFound data={reviewNotFound} />
     }

     </ReviewContainer>}
        
        <OtherProductContainer>
          <OtherCustomerBroughtTitle>
            Other Customers bought
          </OtherCustomerBroughtTitle>
          <ProductContainer>
            <ProductCard
              price={"6,999.00"}
              originalPrice={"6,999.00"}
              type={"GAINER"}
              title={"Mass Gainer(5KG)"}
              productImage={MassGainer5KG}
            />
            <ProductCard
              price={"6,999.00"}
              originalPrice={"6,999.00"}
              type={"GAINER"}
              title={"Mass Gainer(5KG)"}
              productImage={MassGainer5KG}
            />
            <ProductCard
              price={"6,999.00"}
              originalPrice={"6,999.00"}
              type={"GAINER"}
              title={"Mass Gainer(5KG)"}
              productImage={MassGainer5KG}
            />
          </ProductContainer>
        </OtherProductContainer>
      </MainContainer>
    </>
    }
      <Footer />

    </React.Fragment>
    
  );
};

export default ProductPage;
