import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const productos = [
    { nombre: "TV", id: "1", precio: 23500, stock: true, imagen: "/images/televisor.jpg" },
    { nombre: "SmartPhone", id: "2", precio: 10000, stock: true, imagen: "/images/telefono.jpg" },
    { nombre: "Tablet", id: "3", precio: 3500, stock: false, imagen: "/images/tablet.jpg" },
  ]

  useEffect(() => {
    const promesa = new Promise((resolver) => {
      setTimeout(() =>
        resolver(JSON.stringify(productos))
        ,2000)
    },);
    promesa.then((response) => setProd(JSON.parse(response)))

  }, []);
  const [myProd, setProd] = useState([]);
  console.log(myProd.length)

  return (
    <>
      {myProd.map((pr) => (
        <Item item={pr} key={pr.id}></Item>
      )
      )}
    </>
  )
}


export default ItemList