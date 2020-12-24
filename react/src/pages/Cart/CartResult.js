import React, { Component } from 'react';
import '../Cart/Cart.css';

function CartResult () {
    
        return(
            <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>xxxxxxxxxxxx</strong>
                </h4>
            </td>
            <td >
                <button type="button" className="btns btn-primarys waves-effect waves-light">Thanh Toán
                        <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>   
           
        );

}

export default CartResult;