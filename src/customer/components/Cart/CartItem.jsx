import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../../State/Cart/Action";
import { removeCartItem } from "./../../../State/Cart/Action";
const CartItem = (item) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.item?.quantity + num },
      cartItemId: item.item?.id,
    };
    console.log("data update", data);
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.item?.id));
  };
  return (
    <div className="p-5 shadow-lg border border-gray-300 rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.item?.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.item?.product.title}</p>
          <p className="opacity-70">
            Size: {item.item?.size}, {item.item?.product.color}{" "}
          </p>
          <p className="opacity-70 mt-2">Seller: {item.item?.product.brand}</p>

          <div className="flex items-center space-x-5 text-lg lg:text-xl text-gray-900 mt-6 ">
            <p className="font-semibold">
              ${item.item?.product.discountedPrice}
            </p>
            <p className="text-green-500 font-semibold">
              {item.item?.product.discountedPersent}% Off
            </p>
            <p className="opacity-50 line-through">
              ${item.item?.product.price}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.item?.quantity <= 1}
            sx={{ color: "rgb(145 85 253)" }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className=" py-1 px-7 border rounded-sm border-gray-400 item">
            {item.item?.quantity}
          </span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "rgb(145 85 253)" }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "rgb(145 85 253)" }}
          >
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
