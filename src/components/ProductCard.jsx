import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const ProductCard = () => {
    const items = useSelector((state) => state.allcart.items);
    const dispatch= useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        alert("Product added to cart!");
    };

    return (
        <>
            <div className="cards py-5">
                <div className="container">
                    <h1 className="text-center mb-4 ">All Products</h1>
                    <div className="row gx-4 gy-5">
                        {items.map((item) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
                                <div className="card">
                                    <div className="card-img-top"><img src={item.img}  alt="mobile-img" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.price}</p>
                                        <a onClick={()=>(handleAddToCart(item))} className="btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
