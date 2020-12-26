import React, { useEffect, useState } from 'react';
import { getCartItems, addCartItem, getAllProductsAsync } from '../../lib/backendService';
import CartItem from '.././Cart/CartItem';
import CartResult from '.././Cart/CartResult';
import "../Cart/Cart.css";

function CartContainer() {

    const [products, setProducts] = useState([])
     const [allProduct, setAllProduc] = useState([]);
    useEffect(() =>{
        getAllProductsAsync()
          .then(res => {
            setAllProduc(res.product_list)
          })
    }, [])
    

    const addItem = ()=>{
        addCartItem(allProduct[0]);
      }

    useEffect(() => {
        getCartItems().
        then(res => {
            setProducts(res.cart)
           // console.log(res.cart);
            //console.log(res.cart[0]);
            //console.log("RES CART");
        })

    }, [products])


    return (
        <div className="ContainerCart">
            <section className="section">
                <h1 className="title">
                    <span>GIỎ HÀNG CỦA TÔI</span>
                </h1>
                <div>
                    <button type="button" onClick={addItem}>
                        add product
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th></th>
                                <th>Đơn Giá</th>
                                <th><span className="quality">Số Lượng</span></th>
                                <th>Tổng Cộng</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                        <CartItem items={products} />
                        </tbody>
                        <CartResult />
                    </table>
                </div>
            </section>
        </div>

    );
}

/* <CartItem iterms={products} /> */
export default CartContainer;