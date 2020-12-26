
import React from 'react';
import { getProductImageUrl, removeCartItem, getAllProductsAsync, setCartItemQuantity, getCartItems } from '../../lib/backendService';

import { useEffect, useState } from 'react';


export default function CartItem({items}) {

    const [checked, setChecked] = useState(false);
    const changeCheckBox = e => {
        setChecked(!checked);
    }
    
    return items.map((item) => (
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
                    <strong>{item.name}</strong>
                </h5>
            </td>
            <td scope="row">
                <img className="img-fluids z-depth-0" src={getProductImageUrl(item.img)}
                    alt="hình" />
            </td>
            <td>
                {(Number(item.price) % 1 === 0.5) ?
                    (<span className="price">
                        {Number(item.price)}00
                        <span className="sub-price">₫</span>
                    </span>) :
                    <span className="price">
                        {Number(item.price) }.000
                <span className="sub-price">₫</span>
                    </span>
                }
            </td>
            <td className="center-on-small-only">
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        /*onClick={}*/
                        className="btns btn-sm "
                    >
                        <a>-</a>
                    </label>
                    <input aria-label="quantity" className="qty count" type="number" 
                    value="1"></input>
                    <label
                        /*onClick={"1"}*/
                        className="btns btn-sm "
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td><span className="PriceTotal">
                {(Number(item.price) * Number(item.quantity) % 1 === 0.5) ?
                    (<span className="price">
                        {Number(item.price) * Number(item.quantity)}00
                        <span className="sub-price">₫</span>
                    </span>) :
                    <span className="price">
                        {Number(item.price) * Number(item.quantity)}.000
                <span className="sub-price">₫</span>
                    </span>
                }
            </span></td>
            <td>
                <button
                    type="button"
                    className="btns btn-sm "
                    onClick={() => {
                        removeCartItem(item)
                    }}
                >
                    X
                  </button>
   
            </td>
        </tr>
    ));
}