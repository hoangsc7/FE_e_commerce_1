import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border border-gray-300 rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Women Slim Mid Rise Shirts</p>
          <p className="opacity-70">Size: L, Black </p>
          <p className="opacity-70 mt-2">Seller: |Crishtaliyo 2fashion</p>

          <div className="flex items-center space-x-5 text-lg lg:text-xl text-gray-900 mt-6 ">
            <p className="font-semibold">199</p>
            <p className="text-green-500 font-semibold">50% Off</p>
            <p className="opacity-50 line-through">299</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className=" py-1 px-7 border rounded-sm border-gray-400 item">
            3
          </span>
          <IconButton sx={{ color: "rgb(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "rgb(145 85 253)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
