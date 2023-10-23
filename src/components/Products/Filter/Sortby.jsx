import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const Sortby = () => {
  return (
    <MDBDropdown className="p-3">
      <MDBDropdownToggle>Sort By </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link childTag="button">
          Name
        </MDBDropdownItem>
        <MDBDropdownItem link childTag="button">
          Price
        </MDBDropdownItem>
        <MDBDropdownItem link childTag="button">
          Rating
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sortby;
