import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { checkAdmin } from "../../utils/checkAuth";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../store";

const BottomNav = () => {
  const activeNav = useStore((state) => state.ActiveNav);
  console.log(activeNav);
  const { SubMenu } = Menu;
  const [activeId, setActiveId] = useState();
  const MenuContainer = styled.div`
    display: block;
    @media (max-width: 963px) {
      display: none;
    }
    width: 100vw;
  `;

  return (
    <MenuContainer>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
        defaultSelectedKeys={[activeNav]}
      >
        <Menu.Item key="/home">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="/products">
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            Products
          </Link>
        </Menu.Item>

        <SubMenu key="CategoryMenu" title="Categories">
          <Menu.Item key="gainer">
            <Link
              to="/products?q=gainer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Gainer
            </Link>
          </Menu.Item>
          <Menu.Item key="whey-protein">
            <Link
              to="/products?q=whey-protein"
              style={{ textDecoration: "none", color: "white" }}
            >
              Whey Protein
            </Link>
          </Menu.Item>
          <Menu.Item key="support-suppliments">
            <Link
              to="/products?q=support-suppliments"
              style={{ textDecoration: "none", color: "white" }}
            >
              Support Suppliments
            </Link>
          </Menu.Item>
          <Menu.Item key="peanut-butter">
            <Link
              to="/products?q=peanut-butter"
              style={{ textDecoration: "none", color: "white" }}
            >
              Peanut Butter
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/authenticity">
          <Link
            to="/authenticity"
            style={{ textDecoration: "none", color: "white" }}
          >
            Authenticity
          </Link>
        </Menu.Item>
        <Menu.Item key="/account">
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "white" }}
          >
            Account
          </Link>
        </Menu.Item>

        {checkAdmin() && (
          <Menu.Item key="admin">
            <SubMenu key="SubMenu" title="Admin">
              <Link to="/admin/dashboard">
                <Menu.Item key="setting:1">Dashboard</Menu.Item>
              </Link>
              {/* <Link to="/admin/user">
                <Menu.Item key="setting:2">User Management</Menu.Item>
              </Link> */}
              <Link to="/admin/product">
                <Menu.Item key="setting:3">Product Management</Menu.Item>
              </Link>
            </SubMenu>
          </Menu.Item>
        )}
      </Menu>
    </MenuContainer>
  );
};

export default BottomNav;
