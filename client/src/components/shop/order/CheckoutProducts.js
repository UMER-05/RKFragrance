import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity,totalCost } from "../partials/Mixins";
import { cartListProduct } from "../partials/FetchApi";
import { fetchData } from "./Action";
import { createOrder } from "./FetchApi";

const apiURL = process.env.REACT_APP_API_URL;
const jwt = localStorage.getItem("jwt");
let uId = []
if(jwt){
  try{
    const parsedJwt = JSON.parse(jwt);
    uId = parsedJwt.user?._id || [];
  }
  catch (error) {
    console.error("Failed to parse JWT from localStorage", error);
  }
}


export const CheckoutComponent = () => {
  
  
  const { data, dispatch } = useContext(LayoutContext);
  const [state, setState] = useState({
    fullName: "",
    email:"",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    fetchData(cartListProduct, dispatch);
  }, [dispatch]);

  const handleCashOnDelivery = async (e) => {
    e.preventDefault();
    //for allProducts
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const allProduct = cartItems.map((item) => ({
  id: item.id,
  quantity: item.quantitiy,
}));
    const orderData = {
      allProduct,
      user: uId ,
      amount: totalCost(),
      paymentMethod: "COD",
      fullAddress: {
        fullName: state.fullName,
        email: state.email,
        phone: state.phone,
        address: state.address,
        apartment: state.apartment,
        city: state.city,
        state: state.state,
        postalCode: state.postalCode,
      },
    };
   try {
      const response = await createOrder(orderData); // orderData comes from your form + cart
       console.log("Order created!", response);
       console.log('here',orderData);
       localStorage.removeItem("cart");
       // redirect, clear cart, or show success message
     } catch (error) {
       console.log("Failed to place order.");
     }
     setState({ ...state, success: true });
  };

  if (data.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2 mb-4">Order</div>

        {state.success && (
          <div className="bg-green-200 text-green-800 px-4 py-2 rounded mb-4">
            ✅ Order placed successfully!
          </div>
        )}

        <div className="flex flex-col md:flex-row md:space-x-2">
          <div className="md:w-1/2">
            <CheckoutProducts products={data.cartProduct} />
          </div>

          <div className="w-full md:w-1/2">
            <div className="p-4 md:p-8">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={state.paymentMethod === "online"}
                      onChange={(e) => setState({ ...state, paymentMethod: e.target.value })}
                    />
                    <span>Pay Online</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={state.paymentMethod === "cod"}
                      onChange={(e) => setState({ ...state, paymentMethod: e.target.value })}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {/* Shared Form Fields */}
              <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full placeholder-gray-600 border px-4 py-2" value={state.fullName} onChange={(e) => setState({ ...state, fullName: e.target.value })} />
                <input type="email" placeholder="Email" className="w-full placeholder-gray-600 border px-4 py-2" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                <input type="text" placeholder="Phone" className="w-full placeholder-gray-600 border px-4 py-2" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} />
                <input type="text" placeholder="Address" className="w-full placeholder-gray-600 border px-4 py-2" value={state.address} onChange={(e) => setState({ ...state, address: e.target.value })} />
                <input type="text" placeholder="Apartment / Suite (optional)" className="w-full placeholder-gray-600 border px-4 py-2" value={state.apartment} onChange={(e) => setState({ ...state, apartment: e.target.value })} />
                <input type="text" placeholder="City" className="w-full placeholder-gray-600 border px-4 py-2" value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} />
                <input type="text" placeholder="State" className="w-full placeholder-gray-600 border px-4 py-2" value={state.state} onChange={(e) => setState({ ...state, state: e.target.value })} />
                <input type="text" placeholder="Postal Code" className="w-full placeholder-gray-600 border px-4 py-2" value={state.postalCode} onChange={(e) => setState({ ...state, postalCode: e.target.value })} />
              </div>

              {state.paymentMethod === "online" && state.clientToken !== null && (
                <>
                  
                  <button
                  
                    className="w-full bg-black text-white text-sm py-2 rounded mt-4"
                  >
                    Pay Online method is not available right now
                    </button>
                </>
              )}

              {state.paymentMethod === "cod" && (
                <button
                  onClick={handleCashOnDelivery}
                  className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-800 transition"
                >
                  Place Order (COD)
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
            >
              <div className="md:flex md:items-center md:space-x-4">
                <img
                  onClick={() => history.push(`/products/${product._id}`)}
                  className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                  src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                  alt="checkout-product"
                />
                <div className="text-lg md:ml-6 truncate">{product.pName}</div>
                <div className="md:ml-6 font-semibold text-gray-600 text-sm">Price : ${product.pPrice}.00</div>
                <div className="md:ml-6 font-semibold text-gray-600 text-sm">Quantity : {quantity(product._id)}</div>
                <div className="font-semibold text-gray-600 text-sm">Subtotal : ${subTotal(product._id, product.pPrice)}.00</div>
              </div>
            </div>
          ))
        ) : (
          <div>No product found for checkout</div>
        )}
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
