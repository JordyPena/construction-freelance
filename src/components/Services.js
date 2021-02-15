import React from "react";
import "../styling/Services.css";

function Services() {
  return (
    <>
      <div className="services-column">
        <div className="top">
          <div className="title-service">
            <h1 className="services-headers">
              Services we offer at Straub Construction llc
            </h1>
          </div>
        </div>
      </div>

      <div className="services-column">
        <div className="services-row">
          <div className="first-service">
            <img
              className="services-images"
              src={`${process.env.PUBLIC_URL}/images/new-construction.jpg`}
              alt="construction building"
            />
            <h2 className="services-headers">New Construction</h2>
            <p className="services-p">
              Our experienced staff will help you design your new Shop, Garage,
              Pole Barn, Storage Building, Riding Arena, Stall Barn or Accessory
              Building with every feature you need. We can help locate the
              building on your property. Schedule a site visit today so we can
              help you tomorrow.
            </p>
          </div>

          <div className="second-service">
            <img
              className="services-images"
              src={`${process.env.PUBLIC_URL}/images/eckhart.jpg`}
              alt="building"
            />
            <h2 className="services-headers">Kit Material</h2>
            <p className="services-p">
              Are you the ultimate Do It Yourself person, or do you already have
              another contractor in mind? No matter, we can put together a Kit
              with the dimensions, doors, windows, overhead doors, any type of
              roofing and siding. We offer economical pricing buying direct and
              offer a great quality! Call today!
            </p>
          </div>

          <div className="third-service">
            <img
              className="thirdServices-images"
              src={`${process.env.PUBLIC_URL}/images/permit.jpg`}
              alt="permit"
            />
            <h2 className="services-headers">Permit Services</h2>
            <p className="services-p">
              No matter what project, if a permit is required please ask our
              staff about our permit service. We will go to your respectable
              building department and expedite all the paper work. Your time is
              valuable let us assist you in pulling the required permits so you
              can focus on your schedule.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
