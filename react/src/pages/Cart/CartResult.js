import React, { useEffect, useState } from 'react';
import { getCartItems } from '../../lib/backendService';
import '../Cart/Cart.css';

function CartResult() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        getCartItems().then(res => {
            console.log(res.cart)
        })

    }, [products])


    /*const totalPrice = () => {
        console.log("totalPrice()");
        let total = 0;
        if (products.length > 0) {
            for (var i = 0; i < products.length; i++) {
                total += products[i].price * products[i].quanlity;
            }
        }
        return total;
    }*/


    return (
        <tr>
            <td colSpan="3">
            <a href="/" onClick="window.history.back()" className="btn_s btn-default">TIẾP TỤC MUA HÀNG
                </a>
            </td>
            <td>
                <h4>
                    <strong>Tổng Tiền:</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>45</strong>
                </h4>
            </td>
            <td >
                <a href="/" className="btn_s btn-primarys">THANH TOÁN
                </a>
            </td>
        </tr>

    );

}

export default CartResult;

/*<strong>{totalPrice()}</strong*/