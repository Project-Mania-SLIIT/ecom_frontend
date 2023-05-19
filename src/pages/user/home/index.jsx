import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import cs1 from "../../../assets/images/carousel1.jpg"
import cs2 from "../../../assets/images/carousel2.jpg"
import cs3 from "../../../assets/images/carousel3.jpg"


export default function Home() {

  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/product")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <div>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={cs1}
            alt="..."
          >
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={cs2}
            alt="..."
          >
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={cs3}
            alt="..."
          >
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div>
        <br />
        <h2>
          <strong>Featured Products</strong>
        </h2>
      </div>
      <div>
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
          {product.map((prd) => (
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage
                  src={prd.image}
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>{prd.name}</MDBCardTitle>
                  <MDBCardText>
                    {prd.description}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </div>
  );
}
