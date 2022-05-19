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
  useEffect(() => {
    getAllProducts();
    
  }, []);


  const [editState, setEditState] = useState("products")
  


  const handleDeleteProduct = (id) => {
    console.log('delete product', id)
  }

  const handleDeleteFeaturedProduct = (pid, fpid) => {
    console.log('delete fp', pid, fpid)
  }

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
  const PageTitle = styled.p`
    font-weight: 700;
    font-size: 30px;
  `;
  const Productbtn = styled.button`
    background: #f9c349;
    border-radius: 12px;
    border: none;
    padding: 21px 42px;
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

  return (
    <>


      {editState == "products" ? 
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
        </ProductContainerHead>
        <Table>
          <thead>
            <TR>
              <TH>Product</TH>
              <TH>stock</TH>
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
                stock={"In Stock"}
                Action={
                  <>
                    <Link to={`/admin/updateproduct/${product._id}`}>
                      <button
                        style={{
                          border: "none",
                          cursor: "pointer",
                          borderRadius: "6px",
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
              />
            ))}
          </TBody>
        </Table>
      </ProductContainer> : <ProductContainer>
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
          <Link to="/admin/addproduct">
            <PrimaryButton btnText={"Add Flavour"} />
          </Link>
        </ProductContainerHead>
        <Table>
          <thead>
            <TR>
              <TH>Flavour</TH>
              <TH>stock</TH>
              <TH>Quantity</TH>
              <TH>Product</TH>
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
                stock={"In Stock"}
                Action={
                  <>
                    <Link to={`/admin/updateproduct/${product._id}`}>
                      <button
                        style={{
                          border: "none",
                          cursor: "pointer",
                          borderRadius: "6px",
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </>
                }
                key={index}
                handleDeleteProduct={handleDeleteFeaturedProduct}
                id={null}
                pid={product._id}
                fpid={product._id}
              />
            ))}
          </TBody>
        </Table>
      </ProductContainer>}
      <Footer />
    </>
  );
};

export default Admin;
