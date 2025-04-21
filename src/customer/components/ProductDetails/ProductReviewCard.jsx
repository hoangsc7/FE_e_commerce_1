import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70">April 5,2024</p>
            </div>
          </div>
          <Rating name="half-rating" value={4.5} readOnly precision={0.5} />
          <p>nice good good</p>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
