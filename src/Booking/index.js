import React, { useState } from "react";
import "./booking.css";
import Plan from "./Plan";
import Amount from "./Amount";
import Preview from "./Preview";
import Declaration from "./Declaration";
import Review from "./Review";

const Booking = ({ stepsDone, setActiveCta, setStepsDone }) => {
  const [data, setData] = useState({});
  const [amount, setAmount] = useState(300000);
  return (
    <div>
      <div className="progressbar-contianer">
        {["", "", "", ""].map((steps, index) => {
          return (
            <div
              className="booking-progressbar"
              style={{ backgroundColor: stepsDone >= index && "#E06358" }}
            />
          );
        })}
      </div>
      <div className="booking-form-container">
        {stepsDone === 0 && (
          <>
            <Plan
              setOuterData={setData}
              setActiveCta={setActiveCta}
              outerData={data}
            />
            <Preview data={data} />
          </>
        )}
        {stepsDone === 1 && (
          <>
            <Amount
              setActiveCta={setActiveCta}
              data={data}
              setAmount={setAmount}
              setStepsDone={setStepsDone}
              stepsDone={stepsDone}
            />
            <Preview data={data} />
          </>
        )}
        {stepsDone === 2 && (
          <>
            <Declaration
              setActiveCta={setActiveCta}
              data={data}
              setAmount={setAmount}
              setStepsDone={setStepsDone}
              stepsDone={stepsDone}
            />
            <Preview data={data} />
          </>
        )}
        {stepsDone === 3 && (
          <>
            <Review
              setActiveCta={setActiveCta}
              data={data}
              setAmount={setAmount}
              setStepsDone={setStepsDone}
              stepsDone={stepsDone}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
