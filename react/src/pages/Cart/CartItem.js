
import React, { Component } from 'react';
import { getProductImageUrl } from '../../lib/backendService';

import { removeCartItem } from '../../lib/backendService';
import {getAllProductsAsync} from '../../lib/backendService';
import {setCartItemQuantity} from '../../lib/backendService';
import { useEffect, useState } from 'react';
import img from './test.jpg';
function CartItem({iterms}) {
    const prod = {
        name: 'keo',
        price: '5',
        quanlity: '2',
    }
    
    const [prods, setProd] = useState({});

    useEffect(() => {
      getAllProductsAsync()
        .then(res => res.product_list)
        .then(list => {
          setProd(list[0]);
        });  
    }, []);

  
    
    function removeFromCart() {
        removeCartItem(prods);
      }


        return iterms.map((iterm)=>(
            
            <tr className="item">
                <td>
                    <h5>
                        <strong>{iterm.name}</strong>
                    </h5>
                </td>
                <td scope="row">
                    <img className="img-fluids z-depth-0" src = {img}
                    alt="hình" />
                </td>
                <td><span className="Pro_price">{iterm.price}</span></td>
                <td className="center-on-small-only">
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={setCartItemQuantity(iterm, -1)}
                            className="btns btn-sm btn-primarys btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <input aria-label="quantity" className="qty count" max="100" min="1" name="" type="number" value={iterm.quanlity}></input>
                        <label
                            onClick={setCartItemQuantity(iterm, +1)}
                            className="btns btn-sm btn-primarys btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td><span className="PriceTotal">{Number(iterm.price)*Number(iterm.quanlity)}</span></td>
                <td>
                    <button
                        type="button"
                        className="btns btn-sm btn-primarys waves-effect waves-light"
                        onClick={removeFromCart}
                    >
                        X
                    </button>
                </td>
            </tr>
            
        ));
    
}

export default CartItem;