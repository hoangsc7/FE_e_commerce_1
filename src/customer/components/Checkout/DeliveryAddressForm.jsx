import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCart from "../AddessCart/AddressCart";
import { WidthFull } from "@mui/icons-material";

const DeliveryAddressForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border border-gray-200 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCart />
                        <Button
                            sx={{ mt: 2, bgcolor: "rgb( 145 85 253)" }}
                            size="large"
                            variant="container"
                        >
                            Deliver here
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7} >
                    <Box className="border border-gray-300 rounded-s-md p-5">
                        <form >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
