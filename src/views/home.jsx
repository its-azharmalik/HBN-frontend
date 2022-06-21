import React, { useEffect, useState } from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import HeaderMain from "../assets/images/headermain.png";
import LeanGainerProduct from "../assets/images/leangainer.png";
import styled from "styled-components";
import ProductBanner from "../components/ProductAdBanner/ProductBanner";
import ProductCard from "../components/Product/ProductCard";
import MassGainer5KG from "../assets/images/Massgainer5kg.png";
import HomePageDiv from "../components/PageDivider/HomePageDiv";
import Footer from "../components/Footer/Footer";
import IngredientsBox from "../components/IngredientBox/IngredientBox";
import CustomerRview from "../components/CustomerReview/CustomerReview";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";
import categorybanner from "../assets/images/categorybanner.png";
import category1 from "../assets/images/category3.jpeg";
import category2 from "../assets/images/category1.jpeg";
import category3 from "../assets/images/category2.jpeg";
import useStore from "../store";
import CommentDivider from "../components/PageDivider/CommentDivider";
import { Carousel } from "antd";
import Banner1 from "../assets/images/banner1.jpeg";
import Loading from "../components/Atoms/Loading";
import bn1 from "../assets/images/bn1.jpg";
import bn2 from "../assets/images/bn2.jpg";
import bn3 from "../assets/images/bn3.jpg";

const Home = () => {
  const setActiveNav = useStore((state) => state.setActiveNav);
  useEffect(() => {
    setActiveNav("/home");
  });
  const getFeaturedProdById = useStore((state) => state.getFeaturedProdById);

  // api calls for 4 products later will be changed to api calls for all data

  const [products, setProducts] = useState();

  const handleProductCalls = async () => {
    const product1 = await getFeaturedProdById(
      "628de37ebcbac516123944d9",
      "628de3f5bcbac5161239456a"
    );
    const product2 = await getFeaturedProdById(
      "628ddf34a95efeb655c84b64",
      "628ddf88a95efeb655c84be8"
    );
    const product3 = await getFeaturedProdById(
      "628c64f7290ab1058326fd21",
      "628ddadda95efeb655c84786"
    );
    const product4 = await getFeaturedProdById(
      "628df7e7bcbac51612394b55",
      "628df7ecbcbac51612394b75"
    );
    console.log(product1);
    const tempArr = [];
    tempArr.push(product1, product2, product3, product4);
    setProducts(tempArr);
  };

  useEffect(() => {
    handleProductCalls();
  }, []);

  const MainHeadContainer = styled.div`
    width: 100%;
  `;
  const BestSellerContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
  `;
  const BestSellerProd = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 750px) {
      justify-content: center;
    }
  `;
  const BestSellerHead = styled.p`
    font-weight: 700;
    font-size: 40px;
    margin: 50px 0;
  `;

  const IngredientsContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
  `;
  const IngredientsHead = styled.p`
    font-weight: 700;
    font-size: 40px;
    margin: 50px 0;
  `;
  const Ingredientsboxs = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    margin: auto;
  `;
  const HomeContainer = styled.div`
    width: 100vw;
  `;
  const CategoryContainer = styled.div`
    width: 80%;
    margin: 40px auto;
  `;
  const CategoryHeadding = styled.div`
    font-weight: 700;
    width: 80vw;
    font-size: 3vw;
    background: url(${categorybanner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 710px) {
      font-size: 20px;
    }
  `;
  const CategoryBoxContainer = styled.div`
    width: 100%;
    display: flex;
    height: 500px;
    // border: 1px solid black;
    margin-top: 30px;
    justify-content: space-between;
    // align-items: center;
    @media (max-width: 710px) {
      flex-wrap: wrap;
      height: max-content;
    }
  `;
  const Category1 = styled.div`
    height: 60%;
    margin: 10px;
    background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${category2});
    background-repeat: no-repeat;
    border-radius: 6px;
    background-position: center;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
    display: flex;
    padding: 20px 30px;
    align-items: end;
    @media(max-width:710px){
      width::90%;
      height:280px;
    }
  `;
  const Category2 = styled.div`
    height: 30%;

    margin: 10px;
    background:  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${category1});
    background-repeat: no-repeat;
    border-radius: 6px;
    background-position: center;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
    display: flex;
    align-items: end;
    padding: 20px 30px;
    @media(max-width:710px){
      width::90%;
      height:280px;
    }
  `;
  const Category3 = styled.div`
    width: 60%;
    height: 94%;

    margin: 10px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
      url(${category3});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 6px;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
    display: flex;
    padding: 20px 30px;
    align-items: end;
    // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    @media (max-width: 710px) {
      width: 100%;
      height: 300px;
    }
  `;
  const CategoryBoxLeft = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    @media (max-width: 710px) {
      // flex-wrap: wrap;
      width: 100%;
    }
  `;
  return (
    <HomeContainer>
      <MainHeadContainer>
        {/* <img
          src={HeaderMain}
          style={{ width: "100vw", objectFit: "cover" }}
        ></img> */}
        <Carousel autoplay>
          <div>
            <img
              src={HeaderMain}
              style={{ width: "100vw", objectFit: "cover" }}
            ></img>
          </div>
          <div>
            <img src={bn1} style={{ width: "100vw", objectFit: "cover" }}></img>
          </div>
          <div>
            <img src={bn2} style={{ width: "100vw", objectFit: "cover" }}></img>
          </div>
          <div>
            <img
              src={Banner1}
              style={{ width: "100vw", objectFit: "cover" }}
            ></img>
          </div>
        </Carousel>
      </MainHeadContainer>
      <CategoryContainer>
        <CategoryHeadding>Shop By Category</CategoryHeadding>
        <CategoryBoxContainer>
          <CategoryBoxLeft>
            <Category1>
              <Link
                to="/products?q=whey-protein"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Whey Protein
              </Link>
            </Category1>
            <Category2>
              <Link
                to="/products?q=support-suppliments"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Daily Support
              </Link>
            </Category2>
          </CategoryBoxLeft>
          <Category3>
            <Link
              to="/products?q=gainer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Gainer
            </Link>
          </Category3>
        </CategoryBoxContainer>
      </CategoryContainer>
      <ProductBanner
        img={LeanGainerProduct}
        title={"Best Quality Hell Boy Nutrition - Lean Gainer"}
      />
      <ProductBanner
        img={LeanGainerProduct}
        title={"Best Quality Hell Boy Nutrition - Lean Gainer"}
        rev={true}
      />
      {console.log(products)}
      <BestSellerContainer>
        <BestSellerHead>BEST SELLER</BestSellerHead>
        <BestSellerProd>
          {products ? (
            products.map((product) => (
              <ProductCard
                price={product.gotFeaturedProductById?.discounted_price}
                originalPrice={product.gotFeaturedProductById?.price}
                type={product.gotFeaturedProductById?.flavour}
                title={product.parentproduct[0].name}
                productImage={product.parentproduct[0].main_url}
                id={product.parentproduct[0]._id}
                fpidFromProductPage={product.gotFeaturedProductById?._id}
              />
            ))
          ) : (
            <Loading />
          )}
        </BestSellerProd>
        <Link
          to={"/products"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <PrimaryButton btnText={"View All"} />
        </Link>
      </BestSellerContainer>
      <HomePageDiv />
      <IngredientsContainer>
        <IngredientsHead>OUR MAIN INGREDIENTS</IngredientsHead>
        <Ingredientsboxs>
          <IngredientsBox
            detail={
              "Whey is one of the best forms of protein for your body that helps you build muscle and lose fat. Consuming supplement with whey is a convenient way to add protein on top of daily intake. All our supplements are enriched with whey that is effective for muscle growth"
            }
            type={"Whey"}
            background={category1}
          />
          <IngredientsBox
            detail={
              "Milk Protein is great for the muscle mass and muscle strength of all ages practicing bodybuilding. All the supplements of Hell Boy Nutrition contain milk protein that helps you to reduce age-related muscle loss"
            }
            type={"Milk"}
            background={category2}
          />
          <IngredientsBox
            detail={
              "Cocoa powder is widely used to boost mood. Besides, many bodybuilders use it for muscle building. Our manufacturing team is well aware of the surprising health benefits of cocoa powder. And that is why cocoa powder is used in all ranges of gym and bodybuilding supplements"
            }
            type={"Cocoa powder"}
            background={category3}
          />
        </Ingredientsboxs>
      </IngredientsContainer>
      <CommentDivider />
      <MainHeadContainer>
        <img src={bn3} style={{ width: "100%", objectFit: "cover" }}></img>
      </MainHeadContainer>
      <CustomerRview />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
