import React, { useState } from "react";
import styled from "styled-components";
import ham from "../../assets/images/hamburger.png";
import cross from "../../assets/images/cross.png";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import hellboylogo1 from "../../assets/images/helboylogo1.png";
import { Link, useLocation } from "react-router-dom";
import { checkAdmin, checkAuth } from "../../utils/checkAuth";

const TopNav = ({handleSearch}) => {

  const [hambugerMenuDisplay, setHambugerMenuDisplay] = useState(false)

  const location = useLocation()

  const Hamburger = styled.img`
  position: relative;
  width: 30px;
  
  `;
  const HamburgerContainer = styled.div`
    display: none;
    @media (max-width: 963px) {
      display: block;
    }
  `;
  const NavBarTopContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 963px) {
      background: #000000;
    }
  `;
  const SearchForm = styled.form`
    height: "40px";
    border: 1px solid black;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    @media (max-width: 784) {
      display: none;
    }
    min-width: 25rem;
  `;
  const SearchInput = styled.input`
    height: 30px;
    width: 80%;
    border: none;
    margin-left: 20px;
    outline: none;
    @media (max-width: 784) {
      display: none;
    }
  `;
  const SearchButton = styled.button`
    height: 35px;
    border-radius: 100px;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9c349;
    color: white;
    padding: 15px;
    cursor: pointer;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const AccButton = styled.div`
    margin: 0 0.5 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const CartButton = styled.div`
    margin: 0 0.5 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 784) {
      display: hidden;
    }
  `;
  const LinksContainer = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-evenly;
  `;
  const RegularFragment = styled.div`
    @media (max-width: 963px) {
      display: none;
    }
  `;


  const HamburgerMenu = styled.div`
    display: none;
    @media (max-width: 963px) {
      display: block;
    }
  `;

  const List = styled.ul`
    position: absolute;
    right: 10px;
    background: black;
    height: 10rem;
    top: 50px;
    z-index: 10000;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    color: white;
  `;
  const ListItem = styled.li`
    font-size: 1rem;
    cursor: pointer;
    color: #F1C40F;
  `;


  const LogoImg = styled.img`
    
  `

  return (
    <NavBarTopContainer>
  
  <Link to="/">
        <LogoImg src={hellboylogo1} alt="Hellby Protein Logo" />
      </Link>
   
    

      <RegularFragment>
        <SearchForm>
          <SearchInput onChange={(e)=>{
            handleSearch(e.target.value);
          }} placeholder="Type Here to Search Products...." type="text" />
          <SearchButton type="submit">
            <div style={{ marginRight: "10px" }}>
              <SearchOutlined />
            </div>
            Search
          </SearchButton>
        </SearchForm>   
      </RegularFragment>

      <RegularFragment>

      <LinksContainer>
     {checkAuth() ? <React.Fragment>
            <AccButton onClick={()=>{
              localStorage.clear();
              window.location.reload()
            }}>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </AccButton>

      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <CartButton>
              <ShoppingCartOutlined
                style={{
                  fontSize: "20px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Cart
              </button>
            </CartButton>
          </Link></React.Fragment>  : <React.Fragment>

            {location.pathname == "/login" ? <React.Fragment>
            <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <AccButton>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Create Account
              </button>
            </AccButton>
        </Link> </React.Fragment> : <React.Fragment>  <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <AccButton>
              <UserOutlined
                style={{
                  fontSize: "20px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </AccButton>
        </Link>         <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <CartButton>
              <ShoppingCartOutlined
                style={{
                  fontSize: "20px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Cart
              </button>
            </CartButton>
          </Link>   </React.Fragment>}


            
            
               </React.Fragment>}
        </LinksContainer>
      </RegularFragment>

      <HamburgerContainer onClick={()=>{
        setHambugerMenuDisplay(!hambugerMenuDisplay)
      }}>
        <Hamburger src={hambugerMenuDisplay ? cross : ham} />
        {hambugerMenuDisplay && <HamburgerMenu>
        <List>
          <ListItem>
              <Link to='/'>Home</Link> 
          </ListItem>
          <ListItem>
           <Link to='/products'>Explore</Link>   
          </ListItem>
          <ListItem>
           <Link to='/cart'>Cart</Link>   
          </ListItem>
          <ListItem>
             <Link to='/authenticity'>
             Authenticity
             </Link> 
          </ListItem>
          {checkAdmin() && <ListItem>
           <Link to='/admin/dashboard'> 
           Admin
           </Link>   
          </ListItem>}
         {checkAuth() ? <ListItem onClick={()=>{
            localStorage.clear()
            window.location.reload()
          }}>
            
           Sign Out
          
          </ListItem> : <ListItem>
            
          <Link to='/login'>Login</Link> 
          
          </ListItem>}
        </List>
      </HamburgerMenu>}
      </HamburgerContainer>

    </NavBarTopContainer>
  );
};

export default TopNav;
