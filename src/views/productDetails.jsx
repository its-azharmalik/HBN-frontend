import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import Details from "../components/ProductDetails/Details";
import Features from "../components/ProductDetails/Features";
import Price from "../components/ProductDetails/Price";
import ProdImages from "../components/ProductDetails/ProdImages";
import useStore from "../store";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ProductDetails = () => {

  
  const [step, setStep] = useState(1);
  const addProduct = useStore((state) => state.addProduct);
  const addFeaturedProdById = useStore((state) => state.addFeaturedProdById);
  const updateProduct = useStore((state) => state.updateProduct);
  const updateFeaturedProduct = useStore((state)=> state.updateFeaturedProduct);
  const param = useParams();
  const getProductById = useStore((state) => state.getProductById);
  const getFeaturedProdById = useStore((state)=> state.getFeaturedProdById);
  const [product, setProduct] = useState(null);
  const [featuredProductEdit, setFeaturedProductEdit] = useState(null);

  useEffect(() => {
    if (param.id) {
      const get = async () => {
        const pr = await getProductById(param.id);
        setProduct(pr);
        console.log(pr)
      };
      get();
    }
  }, []);



  let nameRef = useRef();
  let detailsRef = useRef();
  let weightRef = useRef();
  let mainUrlRef = useRef();
  let [newProductDetails, setNewProductDetails] = useState(null);


    let flavourNameRef = useRef();
    let flavourDescriptionRef = useRef();
    let flavourIngridientsRef = useRef();
    let flavourBenefitsRef = useRef();
    let flavourPriceRef = useRef();
    let flavourDiscountedPriceRef = useRef();
    let authCodeRef = useRef();
    let featuredProductImagesRef = useRef();
    let [newFeaturedProductDetails, setNewFeaturedProductDetails] = useState(undefined);

 



  useEffect(() => {
    if(step==1 && product?.name && product?.details && product?.weight){
      nameRef.current.value = product?.name
      detailsRef.current.value = product?.details
      weightRef.current.value = product?.weight
    }
  }, [product])

  useEffect(() => {
   if(step == 2 && featuredProductEdit){
    flavourNameRef.current.value = featuredProductEdit?.flavour
    flavourDescriptionRef.current.value = featuredProductEdit?.description
    flavourIngridientsRef.current.value = featuredProductEdit?.ingredients
    flavourBenefitsRef.current.value = featuredProductEdit?.benefits
    flavourPriceRef.current.value = featuredProductEdit?.price
    flavourDiscountedPriceRef.current.value = featuredProductEdit?.discounted_price
    authCodeRef.current.value = featuredProductEdit?.auth_code
   }
  }, [featuredProductEdit])

  const getProductDetails = (name, details, weight, mainUrl) => {
    const settingProductDetails = {
      name,
      details,
      weight,
      url: mainUrl,
    }
    return settingProductDetails
  }

  const getFeaturedProductDetails = (flavour, ingredients, description, benefits, price, discounted_price, auth_code, url) => {
    const settingFeaturedProductDetails = {
      flavour,
      ingredients,
      description,
      benefits,
      price,
      discounted_price,
      auth_code,
      url
    }
    return settingFeaturedProductDetails
  }

  const handleFeaturedProductEditChange = async (pid, fpid) => {
    if(fpid != 'new'){
      const result = await getFeaturedProdById(pid, fpid)
      console.log(result)
      setFeaturedProductEdit(result.gotFeaturedProductById)
    } else {
      setFeaturedProductEdit(undefined)
    }
    
  }

  const changeStep = async () => {
    if(step != 4){
        setStep(step + 1)
    }
    else if (step == 4 && !product) {
      // add product logic
      console.log(newProductDetails)
      var productFormData = new FormData();
      productFormData.append("name", newProductDetails.name);
      productFormData.append("weight", newProductDetails.weight);
      productFormData.append("details", newProductDetails.details);
      productFormData.append("url", newProductDetails.url);
      const result = await addProduct(productFormData);

      if(result.status == 200 || result.status == 304){
        // add featured product logic
        console.log(newFeaturedProductDetails)
        var featuredProductFormData = new FormData();
        featuredProductFormData.append("flavour", newFeaturedProductDetails.flavour)
        featuredProductFormData.append("description", newFeaturedProductDetails.description)
        featuredProductFormData.append("ingredients", newFeaturedProductDetails.ingredients)
        featuredProductFormData.append("benefits", newFeaturedProductDetails.benefits)
        featuredProductFormData.append("price", newFeaturedProductDetails.price)
        featuredProductFormData.append("discounted_price", newFeaturedProductDetails.discounted_price)
        featuredProductFormData.append("auth_code", newFeaturedProductDetails.auth_code)
        newFeaturedProductDetails.url.map((ur)=>{
          featuredProductFormData.append("url", ur)
        })
        const fpresult = await addFeaturedProdById(result.data.data._id, featuredProductFormData)
        console.log(result.data.data._id, fpresult)
        
        if(fpresult.status == 200){
          setStep(1);
          toast.success(result.data.message)
        }
        if(fpresult.status != 200){
          toast.error(fpresult.message)
        }
      }


    } else if (step == 4 && product) {
        // setSendingProductDetials Updated Version
        console.log(newProductDetails)
        var productFormData = new FormData();
        productFormData.append("name", newProductDetails.name);
        productFormData.append("weight", newProductDetails.weight);
        productFormData.append("details", newProductDetails.details);
        productFormData.append("url", newProductDetails.url);
        const result = await updateProduct(product._id, productFormData);

        
      setStep(1);
    }

    

    if (step == 1){
      const newProductDetails = getProductDetails(nameRef.current?.value, detailsRef.current?.value, weightRef.current?.value, mainUrlRef.current?.files[0]);
      setNewProductDetails(newProductDetails);
 
    }
    if(step == 2){
      const urlArr = Object.keys(featuredProductImagesRef.current?.files)
      const arrUploadUrl = []
      urlArr.map((url)=>{
        let urlConfig = {}
        urlConfig = featuredProductImagesRef.current?.files[url]
        arrUploadUrl.push(urlConfig)
      })
      const settingFeaturedProductDetails = getFeaturedProductDetails(flavourNameRef.current.value,  flavourIngridientsRef.current.value, flavourDescriptionRef.current?.value, flavourBenefitsRef.current?.value,  flavourPriceRef.current?.value, flavourDiscountedPriceRef.current?.value, authCodeRef.current?.value, arrUploadUrl,)
      setNewFeaturedProductDetails(settingFeaturedProductDetails)
    }
  };

  const updateFeaturedProductOnClick = async () => {
    if(step == 2 && product && featuredProductEdit){
      const urlArr = Object.keys(featuredProductImagesRef.current?.files)
      const arrUploadUrl = []
      urlArr.map((url)=>{
        let urlConfig = {}
        urlConfig = featuredProductImagesRef.current?.files[url]
        arrUploadUrl.push(urlConfig)
      })
      const settingFeaturedProductDetails = getFeaturedProductDetails(flavourNameRef.current.value,  flavourIngridientsRef.current.value, flavourDescriptionRef.current?.value, flavourBenefitsRef.current?.value,  flavourPriceRef.current?.value, flavourDiscountedPriceRef.current?.value, authCodeRef.current?.value, arrUploadUrl,)
      setNewFeaturedProductDetails(settingFeaturedProductDetails)
     
      // update featured product logic
      console.log(newFeaturedProductDetails)
      const featuredProductFormData = new FormData();
      featuredProductFormData.append("flavour", settingFeaturedProductDetails.flavour)
      featuredProductFormData.append("description", settingFeaturedProductDetails.description)
      featuredProductFormData.append("ingredients", settingFeaturedProductDetails.ingredients)
      featuredProductFormData.append("benefits", settingFeaturedProductDetails.benefits)
      featuredProductFormData.append("price", settingFeaturedProductDetails.price)
      featuredProductFormData.append("discounted_price", settingFeaturedProductDetails.discounted_price)
      featuredProductFormData.append("auth_code", settingFeaturedProductDetails.auth_code)
      settingFeaturedProductDetails.url.map((ur)=>{
        featuredProductFormData.append("url", ur)
      })
        const fpresult = await updateFeaturedProduct(product._id, featuredProductEdit._id, featuredProductFormData)
        console.log(fpresult)
      
        if(fpresult.status == 200){
          toast.success("Product Updated")
        }
        if(fpresult.status != 200){
          toast.error(fpresult.message)
        }
      }
    }

    const addNewFeaturedProductEdit = async () => {
      if(step == 2 && product){
        const urlArr = Object.keys(featuredProductImagesRef.current?.files)
        const arrUploadUrl = []
        urlArr.map((url)=>{
          let urlConfig = {}
          urlConfig = featuredProductImagesRef.current?.files[url]
          arrUploadUrl.push(urlConfig)
        })
        const settingFeaturedProductDetails = getFeaturedProductDetails(flavourNameRef.current.value,  flavourIngridientsRef.current.value, flavourDescriptionRef.current?.value, flavourBenefitsRef.current?.value,  flavourPriceRef.current?.value, flavourDiscountedPriceRef.current?.value, authCodeRef.current?.value, arrUploadUrl,)
        setNewFeaturedProductDetails(settingFeaturedProductDetails)
       
        // update featured product logic
        console.log(newFeaturedProductDetails)
        const featuredProductFormData = new FormData();
        featuredProductFormData.append("flavour", settingFeaturedProductDetails.flavour)
        featuredProductFormData.append("description", settingFeaturedProductDetails.description)
        featuredProductFormData.append("ingredients", settingFeaturedProductDetails.ingredients)
        featuredProductFormData.append("benefits", settingFeaturedProductDetails.benefits)
        featuredProductFormData.append("price", settingFeaturedProductDetails.price)
        featuredProductFormData.append("discounted_price", settingFeaturedProductDetails.discounted_price)
        featuredProductFormData.append("auth_code", settingFeaturedProductDetails.auth_code)
        settingFeaturedProductDetails.url.map((ur)=>{
          featuredProductFormData.append("url", ur)
        })
          const fpresult = await addFeaturedProdById(product._id, featuredProductFormData)
          console.log(fpresult)
        
          if(fpresult.status == 200){
            toast.success("Product Updated")
          }
          if(fpresult.status != 200){
            toast.error(fpresult.message)
          }
        }
      }
  

  const NavHead = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const MainHeadProductDetails = styled.p`
    font-weight: 700;
    font-size: 40px;
    @media (max-width: 585px) {
      display: none;
    }
  `;
  const ProductDdetailsPageContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 300px;
  `;
  const ProductInfoContainer = styled.div`
    // width: 40rem;
    // height: 30rem;
    background: #f4f4f6;
    border-radius: 12px;
    margin: 30px 0;
    padding: 40px;
    @media (max-width: 585px) {
      background: #ffffff;
      padding: 20px;
    }
  `;
  const NextButton = styled.div`
    display: flex;
    border: 2px solid #b5bdc4;
    border-radius: 12px;
    width: 18rem;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
    height: 50px;
    flex-wrap: wrap;
    padding: 5px 0;
    background: #f9c349;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 585px) {
      margin: auto;
    }
  `;

  const SetFpi = styled.div`
  background: #f9fafa;
  border-radius: 4px;
  border: 1px solid #b5bdc4;
  margin-bottom: 5px;
  outline: none;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer
  `;






  return (
    <>


      <NavHead>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#818181",
          }}
        >
          Admin/
        </p>
        <p style={{ fontWeight: "500" }}>Product</p>
      </NavHead>
      <ProductDdetailsPageContainer>
        <MainHeadProductDetails>Product Details</MainHeadProductDetails>
        <ProductInfoContainer>
          {step == 1 ? (
            <Details
              nameRef={nameRef}
              detailsRef={detailsRef}
              weightRef={weightRef}
              mainUrlRef={mainUrlRef}
              product={product}
            />
          ) : step == 2 ? ( product ? <React.Fragment>
            <Features setStep={setStep} flavourNameRef={flavourNameRef} flavourDescriptionRef={flavourDescriptionRef} flavourIngridientsRef={flavourIngridientsRef} flavourPriceRef={flavourPriceRef} flavourDiscountedPriceRef={flavourDiscountedPriceRef} authCodeRef={authCodeRef} featuredProductImagesRef={featuredProductImagesRef} flavourBenefitsRef={flavourBenefitsRef} getFeaturedProductDetails={getFeaturedProductDetails} updateFeaturedProductOnClick={updateFeaturedProductOnClick} edit={true} addNewFeaturedProductEdit={addNewFeaturedProductEdit} featuredProductEdit={featuredProductEdit} />
            
            <SetFpi onClick={()=>{
                handleFeaturedProductEditChange(product._id, 'new');
              }}>
                <p>New Featured Product</p>
              </SetFpi>
          
           {product.featured_product_id.map((fpi)=>( <SetFpi onClick={()=>{
             handleFeaturedProductEditChange(product._id, fpi._id)
           }}>
             <p>{fpi.flavour}</p>
              </SetFpi>))}
             
          </React.Fragment> :
            <Features setStep={setStep} flavourNameRef={flavourNameRef} flavourDescriptionRef={flavourDescriptionRef} flavourIngridientsRef={flavourIngridientsRef} flavourPriceRef={flavourPriceRef} flavourDiscountedPriceRef={flavourDiscountedPriceRef} authCodeRef={authCodeRef} featuredProductImagesRef={featuredProductImagesRef} flavourBenefitsRef={flavourBenefitsRef} getFeaturedProductDetails={getFeaturedProductDetails} edit={false} />
          ) : step == 3 ? (
            <Price getPrice={getProductDetails} price={product?.price} />
          ) : step == 4 ? (
            <ProdImages />
          ) : (
            ""
          )}
        </ProductInfoContainer>
        <NextButton onClick={changeStep}>
          {step == 4 && !product
            ? "Add Product"
            : step == 4 && product
            ? "Update Product"
            : "Next"}
        </NextButton>
      </ProductDdetailsPageContainer>
      <Footer />
    </>
  )

};

export default ProductDetails;
