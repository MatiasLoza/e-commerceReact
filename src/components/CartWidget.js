import logo2 from "../logo2.svg";
import React from 'react'

const styleLogo = {
    width: "3rem",
    margin: "1rem"
};

function CartWidget() {
    return (
        <>
            <img style={styleLogo} src={logo2}></img>
        </>
    )
}

export default CartWidget