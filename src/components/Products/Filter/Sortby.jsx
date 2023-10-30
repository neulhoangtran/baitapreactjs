import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { setProducSort } from "../../../action/product";
import { useDispatch } from "react-redux";

const Sortby = () => {
  const dispatch = useDispatch();
  return (
    <MDBDropdown className="p-3">
      <MDBDropdownToggle>Sort By </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem
          onClick={() => dispatch(setProducSort("name"))}
          link
          childTag="button"
        >
          Name
        </MDBDropdownItem>
        <MDBDropdownItem
          link
          onClick={() => dispatch(setProducSort("price"))}
          childTag="button"
        >
          Price
        </MDBDropdownItem>
        <MDBDropdownItem
          link
          onClick={() => dispatch(setProducSort("rating"))}
          childTag="button"
        >
          Rating
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sortby;
