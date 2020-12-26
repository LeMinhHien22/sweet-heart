import React from 'react'
import { getProductImageUrl, removeCartItem, getAllProductsAsync, setCartItemQuantity, getCartItems } from '../../lib/backendService';
import "../Cart/Cart.css";

import { useEffect, useState } from 'react';
export default function Item(iterm) {

    /*const [checked, setChecked] = useState(false);
    const changeCheckBox = e => {
        setChecked(!checked);
    }



    return (
        <tr className="item">

            <td>
                <div className="cart-item__cell-checkbox">

                    <label className="container">
                        <input type="checkbox" checked={checked} onChange={changeCheckBox} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </td>
            <td>
                <h5>
                    <strong>{iterm.name}</strong>
                </h5>
            </td>
            <td scope="row">
                <img className="img-fluids z-depth-0" src={getProductImageUrl(iterm.img)}
                    alt="hình" />
            </td>
            <td>
                {(Number(iterm.price)  % 1 === 0.5) ?
                    (<span className="price">
                        {Number(iterm.price)}00
                        <span className="sub-price">₫</span>
                    </span>) :
                    <span className="price">
                        {Number(iterm.price)}.000
                <span className="sub-price">₫</span>
                    </span>
                }
            </td>
            <td className="center-on-small-only">
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        /*onClick={}
                        className="btns btn-sm "
                    >
                        <a>-</a>
                    </label>
                    <input aria-label="quantity" className="qty count" type="number" onChange={e => {
                        setCartItemQuantity(iterm, e.target.value)

                    }} value={iterm.quantity}></input>
                    <label
                        /*onClick={"1"}
                        className="btns btn-sm "
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>
                {(Number(iterm.price) * Number(iterm.quantity) % 1 === 0.5) ?
                    (<span className="price">
                        {Number(iterm.price) * Number(iterm.quantity)}00
                        <span className="sub-price">₫</span>
                    </span>) :
                    <span className="price">
                        {Number(iterm.price) * Number(iterm.quantity)}.000
                <span className="sub-price">₫</span>
                    </span>
                }
            </td>
            <td>
                <button
                    type="button"
                    className="btns btn-sm "
                    onClick={() => {
                        removeCartItem(iterm)
                    }}
                >
                    X
                    </button>

                <button type="button" onClick={() => {
                    setCartItemQuantity(iterm, 7);
                    console.log(iterm);
                }}>Test
                    </button>
            </td>
        </tr>
    )
}
*/}