import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
// import {getCartProductDetails} from "../../features/Users/userSlice";

const CheckoutForm = () => {
  // const params = useParams();
  // const dispatch = useDispatch();

  // // Assuming checkoutCart is an array of products
  // const {checkoutCart} = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getCartProductDetails(params.id));
  // }, [dispatch, params]);

  return (
    // <div className="checkout-form">
    //   <div className="product-info">
    //     {checkoutCart && checkoutCart.length > 0 ? (
    //       checkoutCart.map((product) => (
    //         <div key={product._id} className="card">
    //           <div className="image">
    //             <img
    //               src={product.image?.url || "default-image-url"}
    //               alt={product.name}
    //             />
    //           </div>
    //           <div className="name">{product.name}</div>
    //           <div className="description">{product.description}</div>
    //           <div className="price">
    //             <BsCurrencyRupee />
    //             {product.price}
    //           </div>
    //           <div className="quantity">{product.quantity}</div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No products in cart.</p>
    //     )}
    //   </div>

    //   <div className="checkout-form">
    //     <form action="" className="form">
    //       <div className="form-group">
    //         <label htmlFor="name">Name</label>
    //         <input type="text" name="name" id="name" />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input type="text" name="email" id="email" />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="address">Address</label>
    //         <input type="text" name="address" id="address" />
    //       </div>
    //       <div className="form-group">
    //         <button type="submit" className="btn">
    //           Place order
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <></>
  );
};

export default CheckoutForm;
