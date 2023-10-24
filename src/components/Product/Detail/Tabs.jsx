import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Tabs() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="product-tabs">
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            Detail
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Review
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab3")}
            active={basicActive === "tab3"}
          >
            Payment
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane className="pt-2 pb-5" show={basicActive === "tab1"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse
          amet in, mollitia optio est error doloremque eum expedita aliquam?
          Ratione veritatis repellendus similique maxime officia ipsam debitis
          minima esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam esse amet in, mollitia optio est error doloremque eum expedita
          aliquam? Ratione veritatis repellendus similique maxime officia ipsam
          debitis minima esse?
        </MDBTabsPane>
        <MDBTabsPane className="pt-2 pb-5" show={basicActive === "tab2"}>
          <div className="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </MDBTabsPane>
        <MDBTabsPane className="pt-2 pb-5" show={basicActive === "tab3"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse
          amet in, mollitia optio est error doloremque eum expedita aliquam?
          Ratione veritatis repellendus similique maxime officia ipsam debitis
          minima esse?
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}
