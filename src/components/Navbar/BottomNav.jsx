import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { checkAdmin } from "../../utils/checkAuth";
import styled from "styled-components";


const BottomNav = () => {
  const { SubMenu } = Menu;

  const MenuContainer = styled.div`
  display: block;
  @media (max-width: 963px) {
    display: none;
  }
  width: 100vw;
  `

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
    >
      <Menu.Item key="home">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="products">
        <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
          Explore
        </Link>
      </Menu.Item>
      <Menu.Item key="authenticity">
        <Link
          to="/authenticity"
          style={{ textDecoration: "none", color: "white" }}
        >
          Authenticity
        </Link>
      </Menu.Item>

  { checkAdmin() &&  <Menu.Item key="admin">
        <SubMenu key="SubMenu" title="Admin">
          <Link to="/admin/dashboard">
            <Menu.Item key="setting:1">Dashboard</Menu.Item>
          </Link>
          <Link to="/admin/user">
            <Menu.Item key="setting:2">User Management</Menu.Item>
          </Link>
          <Link to="/admin/product">
            <Menu.Item key="setting:3">Product Management</Menu.Item>
          </Link>
        </SubMenu>
      </Menu.Item>}
    </Menu>
    </MenuContainer>

  );
};

export default BottomNav;
