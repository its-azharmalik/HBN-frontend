import React, { useEffect, useState } from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ProductCard from "../components/Product/ProductCard";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";
import useStore from "../store";
import Loading from "../components/Atoms/Loading";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { searchFunction } from "../utils/searchFunction";
import NoResult from "../assets/images/noresult.gif";
const AllProducts = () => {
  const ProductContainer = styled.div`
    width: 80%;
    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ProductContainerHead = styled.div`
    width: 100%;
    height: 100px;
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    // border: 1px solid black;
  `;
  const CurrentUrlContainer = styled.div`
    display: flex;
  `;
  const ProductHeadLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `;
  const FilterBox = styled.div`
    border: 1px solid #b5bdc4;
    border-radius: 51px;
    height: 40px;
    width: max-content;
    display: flex;
    justify-content: felx-start;
    align-items: center;
    padding: 20px;
  `;
  const BestSellerProd = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 757px) {
      justify-content: center;
    }
  `;
  const NoResultContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const NoResultImg = styled.img``;

  const [searchParams, setSearchParams] = useSearchParams();

  const querry = searchParams.get("q");

  const allProducts = useStore((state) => state.AllProducts);
  const getAllProducts = useStore((state) => state.getAllProduct);

  const [productList, setProductList] = useState([]);
  const [featuredProductList, setFeturedProductList] = useState();
  const [loading, setLoading] = useState();

  const getProdcuts = async () => {
    setLoading(true);
    const result = await getAllProducts();
    console.log(result)
    const finalSearchedData = searchFunction(querry, result.data.data);
    setProductList(finalSearchedData);
    const fpListTemp = [];
    result.data.data.map((product) => {
      product.featured_product_id.map((fp) => {
        fpListTemp.push(fp);
      });
    });
    setFeturedProductList(fpListTemp);
    setLoading(false);
  };

  useEffect(() => {
    
      getProdcuts();
    
  }, [querry]);

  return (
    <>
      <ProductContainer>
        <ProductContainerHead>
          <ProductHeadLeft>
            <CurrentUrlContainer>
              <Link
                to="/"
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#818181",
                }}
              >
                Home
              </Link>
              <p style={{ fontWeight: "500" }}>
                /
                <Link style={{ color: "black" }} to="/products">
                  All Products
                </Link>
              </p>
            </CurrentUrlContainer>
            <p style={{ fontWeight: "500" }}>Showing all results</p>
          </ProductHeadLeft>
          <FilterBox>Showing All Results</FilterBox>
        </ProductContainerHead>
        {loading ? (
          <Loading />
        ) : (
          <BestSellerProd>
            {productList.length > 0 ? (
              productList?.map((prod) =>
                prod.featured_product_id.map((fpid) => (
                  <ProductCard
                    price={fpid.discounted_price}
                    originalPrice={fpid.price}
                    type={fpid.flavour}
                    title={prod.name}
                    productImage={prod.main_url}
                    id={prod._id}
                    fpidFromProductPage={fpid._id}
                  />
                ))
              )
            ) : (
              <NoResultContainer>
                <NoResultImg src={NoResult} />
              </NoResultContainer>
            )}
          </BestSellerProd>
        )}
      </ProductContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "2rem 1rem",
        }}
      >
        {/* <PrimaryButton btnText={"Load More"} /> */}
      </div>
      {/* <Loading /> */}
      <Footer />
    </>
  );
};

export default AllProducts;
