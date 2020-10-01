import React, { Fragment } from "react";
import "./index.css";
import { Header, Footer } from "../../Components";
import PriceCard from "../../Components/PriceCard";
function Pricing() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="grid">
          <PriceCard
            plan={"basic"}
            price={"INR 100"}
            utilityOne={"100 posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"1 premium course/ month"}
          />
          <PriceCard
            plan={"basic"}
            price={"INR 100"}
            utilityOne={"100 posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"1 premium course/ month"}
          />
          <PriceCard
            plan={"basic"}
            price={"INR 100"}
            utilityOne={"100 posts / Day"}
            utilityTwo={"Unlimited post search"}
            utilityThree={"1 premium course/ month"}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Pricing;
