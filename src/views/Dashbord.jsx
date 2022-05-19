import React, { useEffect, useState } from 'react'
import BottomNav from "../components/Navbar/BottomNav";
import TopNav from "../components/Navbar/TopNav";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import TableRow from '../components/OrderTable/TableRow';
import ChartImg from '../assets/images/Chart.png'
import { Link } from 'react-router-dom';
import useStore from '../store'
import Loading from '../components/Atoms/Loading'
import NoDataFound from '../components/Atoms/NoDataFound'
const Dashbord = () => {



  const getAllOrders = useStore((state)=> state.getAllOrders);
  const [orderList, setOrderList] = useState();


  const getOrders =  async () => {
    const result = await getAllOrders();
    setOrderList(result.data.data.orders)
  }

  useEffect(() => {
   getOrders()
  }, [])



    const ProductContainer = styled.div`
    width: 80%;
    // border: 1px solid black;
    margin: 20px auto;
    margin-bottom: 200px;
  `;
  const PageTitle=styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 0;
  `
  const Span =styled.div`

  `
  
  const Table = styled.table`
  border-collapse: separate;
  margin: 25px 0;
  font-size: 0.9rem;
  min-width: 400px;
  width: 100%;
  border-spacing: 0 25px;
`;
const TH = styled.th`
  padding: 12px 15px;
  color: #b5bdc4;
`;
const TR=styled.tr`
text-align:left;`
const TBody = styled.tbody``;

  return (
 <>


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
        <PageTitle>Dashboard</PageTitle>
        <Span><img style={{
          width: "90%",
        }} src={ChartImg} /></Span>
        <PageTitle>Orders</PageTitle>
{orderList ? 
<React.Fragment>
  {
    orderList.length > 0 ? <Table>
    <thead>
                <TR
                >
                  <TH>Product</TH>
                  <TH>ID</TH>
                  <TH>Paid</TH>
                  <TH>Total</TH>
                  <TH>Deliverd</TH>
                 
                </TR>
              </thead>
    <TBody>

      {orderList.map((order, index)=> (        <TableRow key={index}
          ProductName={order.user_id.name}
          ProductDesc={order.phone_number}
          ID={order._id}
          Paid={order.payment_done}
          Total={order.cart_id.discounted_cart_price}
          Deliverd={order.isDelivered ? 'Yes' : 'No'}
        />))}
      

      
      

    
    
    </TBody>
    </Table> : <NoDataFound data={'no orders found'} />
  }
</React.Fragment>
 : <Loading />}
 </ProductContainer>
<Footer/>
  </>
  )
}

export default Dashbord