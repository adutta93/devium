import React, { Fragment } from "react";
import "./index.css";
import { Header, Footer } from "../../Components";
import PriceCard from "../../Components/PriceCard";
function Pricing() {
  return (
    <Fragment>
      <Header />
      <div className="prem-container">
        <div className="prem-grid">
          <PriceCard
            plan={"Basic"}
            price={"100"}
            utilityOne={"100 posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"1 premium course/ month"}
          />
          <PriceCard
            plan={"Premium"}
            price={"500"}
            utilityOne={"1000 posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"2 premium course/ month"}
          />
          <PriceCard
            plan={"Ultimate"}
            price={"1000"}
            utilityOne={"Unlimited posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"5 premium course/ month"}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Pricing;
