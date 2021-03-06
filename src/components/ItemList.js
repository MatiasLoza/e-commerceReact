import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from "../firebase/firebase";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

const ItemList = () => {
  const { categoriaId } = useParams();
  const [resultProductos, setResultProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  function mostrarCarrito(producto, cantidad) {

  }

  const getProductos = () => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("Productos");    
    if (categoriaId > 0) {
      const productoCategoria = itemCollection.where("categoriaId", "==", parseInt(categoriaId));
      productoCategoria.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No se encontraron productos");          
        }
        setResultProductos(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }else{  
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("No se encontraron productos");          
            }
            setResultProductos(
              querySnapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
              }))
            );
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    getProductos();
  }, [categoriaId]);

  return (
    <Fragment>
      <Loading loading={loading} />
      {!loading && (
        <Fragment>
          <div>
            <div id="div-ir-carrito" style={{ display: "none" }}>
              <Button variant="warning">
                <NavLink to={`/carrito`}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Termina tu Compra
                </NavLink>
              </Button>
            </div>
            <Container>
              <Row>
                {resultProductos.map((producto) => (
                  <Item
                    key={producto.id}
                    item={producto}
                    mostrarCarrito={mostrarCarrito}
                  />
                ))}
              </Row>
            </Container>
          </div>
        </Fragment>
      )}
    </Fragment>
  );  
};

export default ItemList;
