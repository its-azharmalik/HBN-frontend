import React, { useEffect, useState } from "react";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Footer from "../components/Footer/Footer";
import TableRow from "../components/ProductTable/TableRow";
import PrimaryButton from "../components/Atoms/Primary Button/PrimaryButton";
import { Link } from "react-router-dom";
import useStore from "../store";
import AllProducts from "./allProducts";
const Admin = () => {
  const allProducts = useStore((state) => state.AllProducts);
  const getAllProducts = useStore((state) => state.getAllProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);
  const deleteFeaturedProdById = useStore(
    (state) => state.deleteFeaturedProdById
  );

  const [allFeaturedProducts, setAllFeaturedProducts] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const tempArr = [];
    if (allProducts) {
      allProducts.map((product) => {
        product.featured_product_id.map((featuredProduct) => {
          tempArr.push(featuredProduct);
        });
      });
      setAllFeaturedProducts(tempArr);
    }
  }, [allProducts]);

  const [editState, setEditState] = useState("products");

  const handleDeleteProduct = async (id) => {
    const result = await deleteProduct(id);
    getAllProducts();
  };

  console.log(allProducts);

  const handleDeleteFeaturedProduct = async (pid, fpid) => {
    const result = await deleteFeaturedProdById(pid, fpid);
    getAllProducts();
    console.log(result);
  };

  const ProductContainer = styled.div`
    width: 80%;

    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const ProductContainerHead = styled.div`
    width: 100%;
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
    // border: 1px solid black;
  `;
  const PageTitle = styled.p`
    font-weight: 700;
    font-size: 30px;
  `;
  const Productbtn = styled.button`
    background: #f9c349;
    border-radius: 12px;
    border: none;
    padding: 21px 42px;

    height: 60px;
    background: #f9c349;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 30px 0px rgba(249, 195, 73, 0.8);
    cursor: pointer;
  `;
  const Table = styled.table`
    border-collapse: separate;
    margin: 25px 0;
    font-size: 0.9rem;
    min-width: 400px;
    width: 100%;
    border-spacing: 0 25px;
  `;
  const TR = styled.tr`
    text-align: left;
  `;
  const TH = styled.th`
    padding: 12px 15px;
    color: #b5bdc4;
  `;
  const TBody = styled.tbody``;

  const Star = styled.div`
    display: flex;
  `;

  const updateStockByFpId = useStore((state)=> state.updateStockByFpId);

  const [loadingState, setLoadingState] = useState(false)

  const handleStockChange = async (fid) => {
    setLoadingState(true)
    // api call for stock change
    const result = await updateStockByFpId(fid);
    if(result.status != 400){
      getAllProducts();  
      setLoadingState(false)
    }
  }

  return (
    <>
      {editState == "products" ? (
        <ProductContainer>
          <p
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#000000",
            }}
          >
            Admin
          </p>
          <ProductContainerHead>
            <PageTitle>Products</PageTitle>
            <Link to="/admin/addproduct">
              <PrimaryButton btnText={"Add Product"} />
            </Link>
            <Productbtn
              onClick={() => {
                setEditState("featuredProducts");
              }}
            >
              Switch to Featured Products
            </Productbtn>
          </ProductContainerHead>
          <Table>
            <thead>
              <TR>
                <TH>Product</TH>
                {editState == "featuredProducts" ? <TH>Stock</TH> : <></>}
                <TH>Quantity</TH>
                <TH>Date</TH>
                <TH>Rating</TH>
                <TH>Actions</TH>
                <TH></TH>
              </TR>
            </thead>
            <TBody>
              {allProducts.map((product, index) => (
                <TableRow
                  name={product.name}
                  Desc={product.details}
                  stock={"Products"}
                  Action={
                    <>
                      <Link to={`/admin/updateproduct/${product._id}`}>
                        <button
                          style={{
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "6px",
                            color: "black",
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </>
                  }
                  key={index}
                  handleDeleteProduct={handleDeleteProduct}
                  id={product._id}
                  productUrl={product.main_url}
                  handleStockChange={handleStockChange}
                />
              ))}
            </TBody>
          </Table>
        </ProductContainer>
      ) : (
        <ProductContainer>
          <p
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#000000",
            }}
          >
            Admin
          </p>
          <ProductContainerHead>
            <PageTitle>Flavours</PageTitle>
            <Productbtn
              onClick={() => {
                setEditState("products");
              }}
            >Back to Products</Productbtn>
          </ProductContainerHead>
          <Table>
            <thead>
              <TR>
                <TH>Flavour</TH>
                <TH>Stock</TH>
                <TH>Quantity</TH>
                <TH>Product</TH>
                <TH>Rating</TH>
                <TH>Actions</TH>
                <TH></TH>
              </TR>
            </thead>
            <TBody>
              {allProducts.map((product, index) => {
                return product.featured_product_id?.map((featuredProduct) => (
                  <TableRow
                    name={featuredProduct.flavour + " " + product.name}
                    Desc={product.details}
                    stock={featuredProduct.isInStock}
                    Action={<></>}
                    key={index}
                    handleDeleteProduct={handleDeleteFeaturedProduct}
                    id={null}
                    pid={product._id}
                    fpid={featuredProduct._id}
                    productUrl={featuredProduct.url[0]}
                    handleStockChange={handleStockChange}
                    loadingState={loadingState}
                  />
                ));
              })}
            </TBody>
          </Table>
        </ProductContainer>
      )}
      <Footer />
    </>
  );
};

export default Admin;
