import React from "react";
import AddressCart from "./../AddressCart/AddressCart";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCart />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-2" container>
        {[1, 1, 1].map((item) => (
          <Grid
            item
            size={{ sm: 12, md: 12 }}
            container
            className="shadow-xl rounded-md p-5 border-2 border-gray-200"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Slim Mid Back Shirt</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Hoang</p>
                  <p>$99</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon className="px-2" sx={{ fontSize: "2rem" }} />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
