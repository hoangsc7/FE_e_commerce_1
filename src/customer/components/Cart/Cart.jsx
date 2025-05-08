import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-6 relative">
        <div className="col-span-2">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className=" px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border border-gray-300 rounded-md">
            <div className="m-5">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Detail
              </p>
              <hr className="border-gray-300 " />
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price(totalitem)</span>
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
                  onClick={handleCheckout}
                  variant="contained"
                  className="w-full"
                  sx={{ w: "full", bgcolor: "#9155fd", py: "12px" }}
                >
                  Check out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
