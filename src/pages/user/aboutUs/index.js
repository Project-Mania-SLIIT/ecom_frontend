import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <br />

        <h1 className="fst-italic">
          <strong>WHO WE ARE</strong>
        </h1>
        <br />
        <section>
          <div className="row">
          <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center">
              <div
                className=" bg-image hover-overlay ripple shadow-2-strong rounded-6 "
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://www.pcclean.io/wp-content/gallery/library-hd-wallpapers/919004.jpg"
                  className="img-fluid "
                />
              </div>
            </div>
            <div className="col-md-15 gx-5 mb-4 text-justify">
              <br/>
              <h5>
                It is a Online Pharmacy,
                ayurvedic store,Health Store - Its a one stop shop that offers
                effective Medical products, healthcare solutions to all those
                individuals who are health enthusiasts. Providing over 20,000
                health and ayurvedic herbal medicines online at the lowest
                guaranteed price - with the highest pharmaceutical standards. We
                offer premium and the largest range of original health and
                fitness products across various categories and leading brands.
                We dedicate this portal to all those people who are keen to
                purchase healthcare products online. The aim is to supply
                cheaper products to everybody who has access to the internet and
                deliver those products to their door. Through harnessing the
                power of the internet and supplying you directly, this website
                will save up to 75% off the cost of many well known products
                found in your local Medical Shop. We enjoy comprehensive understanding of the shopper’s
                needs and make our best efforts to cater them with an extensive
                choice of both Srilankan and globalbrands Offering a superior
                buying experience, we endow our esteemed customers with the best
                prices in market. we strive to achieve the highest level of
                customer satisfaction. Equipped with a well-informed team, using
                state of the art E-commerce platform, and prompt customer
                support system, we aim to offer our customers with unparalleled
                services. We proudly manage our own warehousing operations that
                facilitate us to meet the daily orders of our customers and
                attain fastest shipping. We believe in adding new selections for
                our customers and making things easier to compare, find and
                discover varied products via our services. online medical store
                offers a variety of key services includingayurvedic herbal
                pharmacy and over-the-counter medicines, vitamins and health
                supplements, family planning , ayurvedic herbal beauty cosmetic
                products, ayurvedic herbal medicine ,toiletries, electrical
                items and baby care products. The service is supervised by fully
                qualified pharmacists who are available to discuss symptoms and
                issues about medical problems in a confidential environment
                through email and oversee all medicinal purchases. So, make a
                move and Happy Shopping !!!!
              </h5>
            </div>
          </div>
        </section>
      </div>

        <Footer />
   
    </div>
  );
};

export default index;
