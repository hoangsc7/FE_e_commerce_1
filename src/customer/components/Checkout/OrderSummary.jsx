import React, { useEffect } from "react";
import AddressCart from "../AddressCart/AddressCart";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId, dispatch]);
  if (!order.order) {
    return <div>Loading...</div>;
  }

  console.log("order data", order);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border border-gray-300 ">
        <AddressCart address={order.order?.shippingAddress} />
      </div>

      <div className="mt-5">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className=" -z-1 px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border border-gray-300 rounded-md">
              <div className="m-5">
                <p className="uppercase font-bold opacity-60 pb-4">
                  Price Detail
                </p>
                <hr className="border-gray-300 " />
                <div className="space-y-3 font-semibold ">
                  <div className="flex justify-between pt-3 text-black ">
                    <span>Price</span>
                    <span>4697</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span>Discount</span>
                    <span className="text-green-600">-4697</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between pt-3 font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">2354</span>
                  </div>
                </div>
                <div className="flex items-center justify-center py-5">
                  <Button
                    variant="contained"
                    sx={{ width: "100%", bgcolor: "#9155fd", py: "12px" }}
                  >
                    Check out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
