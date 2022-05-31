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
  const deleteProduct = useStore((state)=> state.deleteProduct);
  const deleteFeaturedProdById = useStore((state)=> state.deleteFeaturedProdById);

  const [allFeaturedProducts, setAllFeaturedProducts] = useState()


  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
   const tempArr = []
   if(allProducts){
     allProducts.map((product)=>{
       product.featured_product_id.map((featuredProduct)=>{
         tempArr.push(featuredProduct);
       })
     })
     setAllFeaturedProducts(tempArr);
   }
  }, [allProducts])


  const [editState, setEditState] = useState("products")
  


  const handleDeleteProduct = async (id) => {
    const result = await deleteProduct(id)
    getAllProducts();
  }

  console.log(allProducts)

  const handleDeleteFeaturedProduct = async (pid, fpid) => {
    const result = await deleteFeaturedProdById(pid, fpid)
    getAllProducts()
    console.log(result)
  }

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
          <Productbtn onClick={()=>{
        setEditState('featuredProducts');
      }}>Delete Featured Products</Productbtn>
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
          
            <PrimaryButton onClick={()=>{
              setEditState('products')
            }} btnText={"Back to Products"} />
   
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
            {allProducts.map((product, index)=>{
              return product.featured_product_id?.map((featuredProduct)=>( <TableRow
                name={featuredProduct.flavour + " " + product.name}
                Desc={product.details}
                stock={"In Stock"}
                Action={
                  <>
                    
                  </>
                }
                key={index}
                handleDeleteProduct={handleDeleteFeaturedProduct}
                id={null}
                pid={product._id}
                fpid={featuredProduct._id}
                productUrl={featuredProduct.url[0]}
              />
              ))
            })}
             
            
          </TBody>
        </Table>
      </ProductContainer>}
      <Footer />
    </>
  );
};

export default Admin;
