import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const createOrder = async (orderData) => {
  try {
    const res = await axios.post(`${apiURL}/api/order/create-order`, orderData);
    return res.data; // return the response data if the request is successful
  } catch (error) {
    console.error("Error creating order:", error.response ? error.response.data : error.message);
    throw new Error("Failed to create order, please try again later.");
  }
};
