import React from "react";

const AddressCart = ({ address }) => {
  return (
    <div>
      <div>
        <p className="font-semibold">
          {address?.firstName + " " + address?.lastName}
        </p>
        <p>
          {address?.streetAddress},{address?.state},{address?.city}
        </p>
        <p>Zip: {address?.zipCode}</p>
        <div className="space-y-1">
          {/* <p className="font-semibold">Phone Number</p> */}
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCart;
