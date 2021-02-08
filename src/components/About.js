import React from "react";
import "../styling/About.css"
function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-top">
          <div className="top-column">

          <h2 className="about-headers">About Us</h2>
          <p  className="about-p">
            Straub Construction LLC is located in the great northwest near
            Portland OR. Jessie Straub has been in the construction field for 10
            years and takes great pride in producing the highest quality
            construction in the Pacific NW. He strives to complete a project in
            a knowledgeable and prompt manner while keeping a professional
            demeanor. Jessie has been working towards creating his own business
            by learning every aspect of the trade to provide his customers with
            the best product possible.
          </p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="bottom-column">

        <h2 className="about-headers">Who We Are</h2>
        <p  className="about-p">
          Straub Construction LLC is a licensed and bonded general contractor
          offering construction services to fit your individual needs. We
          specialize in building Shops, Garages, RV Storage, Agricultural Barns,
          Stall Barns, Arenas, Storage Buildings, Warehouses, Accessory
          Buildings, Remodeling, Re-roofing or Re-siding of a building,
          Demolition, pulling a permit and site evaluation (to help position
          structure and establish set backs according to city or county's
          requirements). We service all of Oregon CCB # 207657 and Washington #
          STRAUCL836CL.
        </p>
          </div>

          <div className="bottom-column">
          <h2 className="about-headers">Mission Statement</h2>
        <p  className="about-p">
          Most importantly to serve with character and purpose that brings honor
          to God.
        </p>
        <p className="about-p">
          Our mission is: To perform for our customers the highest level of
          quality construction services at fair and market competitive prices.
          To ensure the longevity of our company through repeat and referral
          business achieved by customer satisfaction in all areas including
          timeliness, attention to detail and service-minded attitudes. To
          maintain the highest levels of professionalism, integrity, honesty and
          fairness in our relationships with our suppliers, subcontractors,
          professional associates and customers. To provide our employees with
          an honest and helpful working environment, where every employee
          individually and collectively, can dedicate themselves to providing
          our customers with exceptional workmanship, extraordinary service, and
          professional integrity.
        </p>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default About;
