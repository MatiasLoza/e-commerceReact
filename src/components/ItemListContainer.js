import ItemList from "./ItemList";


const stylesContainer = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "1rem"
 }

function ItemListContainer() {
    return (
        <>
        <div style={stylesContainer}>
        <ItemList></ItemList>
        </div>
        </>
    )
}

export default ItemListContainer