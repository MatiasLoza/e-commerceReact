//rafc
import React from 'react';

const stylesProd = {
  borderStyle: "solid",
  padding: "1rem",
  width: "30%",
  margin: "2rem",
 }
 const stylesImg = {
  width: "200px",
  height: "150px",
  objectFit: "cover"
 }
 const itemStock = (item) =>{
  let stock;
  if(item.stock === true){
     stock = "Si"
  }else {
    stock = "No"
  }
  return stock;
 }

const Item = ({item}) => {
  return (
    <>
    <div style={stylesProd}>
      <h3>{item.nombre}</h3>
      <h3>Precio: ${item.precio}</h3>
      <h3>Stock: {itemStock(item)}</h3>
      <img style={stylesImg} src={item.imagen} alt= "fotos del producto"></img>
    </div>
    </>

  )};

export default Item
