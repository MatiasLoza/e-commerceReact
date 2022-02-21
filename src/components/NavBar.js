import React from 'react'
import CartWidget from "./CartWidget"


const stylesNav = {
  display :"Flex",
  backgroundColor: "rgb(112,80,181)",
  justifyContent: "space-between",

};
const stylesUl = {
  display: "flex",
  padding: "1rem",
  margin: "1rem",
  gap: "2rem", 
};
const stylesLi = {
  listStyleType: "none"
}

const stylesLinks = {
  textDecoration: "none",
  fontWeight: "700"
};


const NavBar = () => {
  return (
    <div style={stylesNav}>
      <CartWidget></CartWidget>
      <h2>E-commerce</h2>
      <nav>
        <ul style={stylesUl}>
          <li style={stylesLi}><a style={stylesLinks} href='./app.js'>Inicio</a></li>
          <li style={stylesLi}><a style={stylesLinks} href="./app.js">Nosotros</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar