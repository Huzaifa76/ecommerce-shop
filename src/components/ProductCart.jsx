import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, removeFromCart,updateQuantity } from '../store/slices/cartSlice';
import { Link } from "react-router-dom";

const ProductCart = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    const handleDelete = (productId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            dispatch(removeFromCart(productId));
        }
    };

    const handleQuantityChange = (productId, newQuantity) => {
        dispatch(updateQuantity({ productId, newQuantity }));
    };

    return (
        <>
            {(totalPrice === 0 && totalQuantity) === 0 ?
                <div className="empty-cart">
                    <h1 className="text-center">Your cart is empty</h1>
                    <p>Plz go back to store and add products into cart</p>
                    <Link className="btn" to="/shop">
                        Back to Store
                    </Link>
                </div> 
                :  <div className="container">
                    <div className="contentbar">
                        <h1 className="text-center mb-4 ">Cart</h1>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="card m-b-30">
                                    <div className="card-header">
                                        <h5 className="card-title">Cart</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10 col-xl-8">
                                                <div className="cart-container">
                                                    <div className="cart-head">
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Photo</th>
                                                                        <th scope="col">Product</th>
                                                                        <th scope="col">Qty</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col" className="text-right">
                                                                            Total
                                                                        </th>
                                                                        <th scope="col">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {cart.map((data, index) => (
                                                                        <tr key={index}>
                                                                            <th scope="row">{index + 1}</th>
                                                                            <td>
                                                                                <img
                                                                                    src={data.img}
                                                                                    className="img-fluid"
                                                                                    width="70"
                                                                                    alt="product"
                                                                                />
                                                                            </td>
                                                                            <td>{data.title}</td>
                                                                            <td>
                                                                                <div className="form-group mb-0">
                                                                                    <input
                                                                                        type="number"
                                                                                        className="form-control cart-qty"
                                                                                        name={`cartQty${index}`}
                                                                                        id={`cartQty${index}`}
                                                                                        value={data.quantity}
                                                                                        onChange={(e) => handleQuantityChange(data.id, parseInt(e.target.value))}
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                            <td>{data.price}</td>
                                                                            <td className="text-right">{parseInt(data.price) * parseInt(data.quantity)}</td>
                                                                            <td>
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-outline-danger"
                                                                                    onClick={() => handleDelete(data.id)}
                                                                                >
                                                                                    <i className="bi bi-trash"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="cart-body">
                                                        <div className="row">
                                                            <div className="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                                                                <div className="order-total table-responsive ">
                                                                    <table className="table table-borderless text-right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Total Quantity :</td>
                                                                                <td>{totalQuantity}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="f-w-7 font-18">
                                                                                    <h6>Total Amount :</h6>
                                                                                </td>
                                                                                <td className="f-w-7 font-18">
                                                                                    <h4>PKR {totalPrice}</h4>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-footer text-right">
                                                        {/* <button type="button" className="btn my-1">
                                                            <i className="ri-save-line mr-2"></i>Update Cart
                                                        </button> */}
                                                        <button className="btn mx-2">
                                                            Proceed to Checkout
                                                            <i className="ri-arrow-right-line ml-2"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductCart;
