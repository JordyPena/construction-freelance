import React from "react";
import newConstruction from "../Images/new-construction.jpg";
import Eckhart from "../Images/eckhart.jpg";
import Permit from "../Images/permit.jpg";

function Services() {
  return (
    <>
      <div className="services-container">
        <div>
          <img src={newConstruction} />
          <h2>New Construction</h2>
          <p>
            Our experienced staff will help you design your new Shop, Garage,
            Pole Barn, Storage Building, Riding Arena, Stall Barn or Accessory
            Building with every feature you need. We can help locate the
            building on your property. Schedule a site visit today so we can
            help you tomorrow.
          </p>
        </div>

        <div>
          <img src={Eckhart} />
          <h2>Kit Material</h2>
          <p>
            Are you the ultimate Do It Yourself person, or do you already have
            another contractor in mind? No matter, we can put together a Kit
            with the dimensions, doors, windows, overhead doors, any type of
            roofing and siding. We offer economical pricing buying direct and
            offer a great quality! Call today!
          </p>
        </div>

        <div>
          <img src={Permit} />
          <h2>Permit Services</h2>
          <p>
            No matter what project, if a permit is required please ask our staff
            about our permit service. We will go to your respectable building
            department and expedite all the paper work. Your time is valuable
            let us assist you in pulling the required permits so you can focus
            on your schedule.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
