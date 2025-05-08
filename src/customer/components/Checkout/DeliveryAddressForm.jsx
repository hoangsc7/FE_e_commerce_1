import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCart from "../AddressCart/AddressCart";





const DeliveryAddressForm = () => {
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = new FormData(e.target);
        const formData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            phoneNumber: data.get("phoneNumber"),
        };
        console.log("Form Data:", formData);
        // const data = Object.fromEntries(formData.entries());

    }





    return (
        <div>
            <Grid container spacing={4} >
                <Grid
                    item
                    size={{ xs: 12, lg: 5 }}
                    className="border border-gray-200 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
                >
                    <div className="p-5 py-7 border-b border-gray-300 cursor-pointer">
                        <AddressCart />
                        <Button
                            sx={{ mt: 2, bgcolor: "rgb( 145 85 253)" }}
                            size="large"
                            variant="contained"
                        >
                            Deliver here
                        </Button>
                    </div>
                </Grid>

                <Grid item size={{ xs: 12, lg: 7 }} >
                    <Box className="border border-gray-300 rounded-s-md p-5">
                        <form id="info" onSubmit={handleSubmit}>
                            <Grid item container spacing={3}>
                                <Grid item size={{ xs: 12, sm: 6 }} >
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }} >
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12 }} >
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }} >
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }} >
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip/Postal Code"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }} >
                                    <Button
                                        sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Deliver Here
                                    </Button>
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
