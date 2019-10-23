import React from "react";

export const SpecialButton = ({ specialChar }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{specialChar}</button>
    </>
  );
};
