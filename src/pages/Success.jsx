import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
    const location = useLocation();
    const data = location.state.data;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState();

    useEffect(() => {
        const createOrder = async() => {
            try {
                const response = await userRequest.post("/orders", {
                    userId: currentUser.id,
                    products: cart.products.map((product) => ({
                        productId: product._id,
                        quantity: product._quantity
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });

                setOrderId(response.data._id);

            } catch (err) {
                console.log(err);
            }
        }

        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
            {
                orderId
                    ? `Order has been created successfully. Your order number is ${orderId}`
                    : `Successfull. Your order is being prepared...`
            }
            <button style={{ padding: 10, marginTop: 20 }}>Go to home page</button>
        </div>
    );
}

export default Success;