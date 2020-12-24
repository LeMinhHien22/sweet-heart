import React, { Component } from 'react';
/*import '../Cart/Cart.css';*/
import { getCartItems } from '../../lib/backendService';
import CartItem from '.././Cart/CartItem';
import CartResult from '.././Cart/CartResult';
import { useEffect, useState } from 'react';

function CartContainer () {

    {/*const products = [
        {
            name: 'bánh nè',
            price: '24',
            quanlity:'2',
        },
        {
            name: 'keo nè',
            price: '12',
            quanlity: '2',
        },
    ]*/}
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getCartItems()
            .then(res => setProducts(res.CartItem))
    }, [products])

        return (
            <div className="ContainerCart">
                <section className="section">
                    <h1 className="title">
                        <span>GIỎ HÀNG CỦA TÔI</span>
                    </h1>
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th></th>
                                    <th>Đơn Giá</th>
                                    <th><span className="quality">Số Lượng</span></th>
                                    <th>Tổng Cộng</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                <tbody>
                <CartItem iterms={products}/>
                </tbody>
                <CartResult/>
                </table>
            </div>
            </section>
            </div>
        
        );
}



export default CartContainer;