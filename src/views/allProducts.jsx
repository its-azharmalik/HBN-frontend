import React, { useEffect, useState } from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ProductCard from "../components/Product/ProductCard";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";
import useStore from "../store";
import Loading from "../components/Atoms/Loading";
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

  const allProducts = useStore((state) => state.AllProducts);
  const getAllProducts = useStore((state) => state.getAllProduct);

  const [productList, setProductList] = useState()
  const [featuredProductList, setFeturedProductList] = useState()


  const getProdcuts = async () => {
    const result = await  getAllProducts();
    setProductList(result.data.data)
    const fpListTemp = [];
    result.data.data.map((product)=> {
      product.featured_product_id.map((fp)=>{
        fpListTemp.push(fp);
      })
    })
    setFeturedProductList(fpListTemp);


  }

  useEffect(() => {
    getProdcuts();

  }, []);









  return (
    <>


      <ProductContainer>
        <ProductContainerHead>
          <ProductHeadLeft>
            <CurrentUrlContainer>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#818181",
                }}
              >
                Home
              </p>
              <p style={{ fontWeight: "500" }}>/All Products</p>
            </CurrentUrlContainer>
            <p style={{ fontWeight: "500" }}>Showing all results</p>
          </ProductHeadLeft>
          <FilterBox>Showing All Results</FilterBox>
        </ProductContainerHead>
        <BestSellerProd>
          {productList ? productList?.map((prod) => (prod.featured_product_id.map((fpid)=>(<ProductCard
      price={fpid.discounted_price}
      originalPrice={fpid.price}
      type={fpid.flavour}
      title={prod.name}
      productImage={fpid.url[0]}
      id={prod._id}
      fpidFromProductPage={fpid._id}
    />)))
          ) : <Loading />}
        </BestSellerProd>
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
      <Footer />
    </>
  );
};

export default AllProducts;
