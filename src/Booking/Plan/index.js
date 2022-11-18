import React, { useState, useEffect } from "react";
import "./plan.css";
import Arrow from "../assets/up-arrow.svg";

const Plan = ({ setOuterData, setActiveCta }) => {
  const [showSelectPlan, setShowSelectPlan] = useState(true);
  const [showBasicDetails, setShowBasicDetails] = useState(true);
  const [data, setData] = useState({
    type: "self",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
  });

  useEffect(() => {
    setOuterData(data);
    const { email, mobile, address1, address2, pincode, state } = data;
    if (email && mobile && address1 && address2 && pincode && state) {
      setActiveCta(true);
    }
  }, [data]);

  const handleChange = (e, type) => {
    setData({ ...data, [type]: e.target.value });
  };

  return (
    <div className="plan-contianer">
      <p className="plan-heading">Choose your plan</p>
      <p className="plan-description">Hello Neelam,</p>
      <p className="plan-description">
        Increase yours and your family's health insurance cover by ₹20 lakhs
        with Super top-up!
      </p>
      <div className="plan-form" style={{ marginTop: "40px" }}>
        <div
          className="plan-form-title"
          onClick={() => setShowSelectPlan(!showSelectPlan)}
        >
          {" "}
          <p>Plan details</p>
          <img
            src={Arrow}
            style={{ transform: showSelectPlan && "rotate(180deg)" }}
          />
        </div>
        {showSelectPlan && (
          <>
            <hr />
            <p>your plan type</p>
            <select onChange={e => handleChange(e, "type")}>
              <option>Self</option>
              <option>Parents</option>
              <option>Self+Parents</option>
            </select>
          </>
        )}
      </div>
      <div className="plan-form" style={{ marginTop: "40px" }}>
        <div
          className="plan-form-title"
          onClick={() => setShowBasicDetails(!showBasicDetails)}
        >
          {" "}
          <p>Basic details (required)</p>
          <img
            src={Arrow}
            style={{ transform: showBasicDetails && "rotate(180deg)" }}
          />
        </div>
        {showBasicDetails && (
          <>
            <hr />
            <div className="plan-basicdetail-container">
              <div className="plan-input-container">
                <p className="plan-input-label">Personal email address</p>
                <input
                  value={data.email}
                  onChange={e => handleChange(e, "email")}
                  type="email"
                />
              </div>
              <div className="plan-input-container">
                <p className="plan-input-label">Mobile number</p>
                <input
                  onChange={e => handleChange(e, "mobile")}
                  value={data.mobile}
                  type="number"
                />
              </div>
              <div className="plan-input-container">
                <p className="plan-input-label">Address line 01</p>
                <input
                  onChange={e => handleChange(e, "address1")}
                  value={data.address1}
                />
              </div>
              <div className="plan-input-container">
                <p className="plan-input-label">Address line 02</p>
                <input
                  onChange={e => handleChange(e, "address2")}
                  value={data.address2}
                />
              </div>
              <div className="plan-input-container">
                <p className="plan-input-label">Pincode</p>
                <input
                  onChange={e => handleChange(e, "pincode")}
                  value={data.pincode}
                  type="number"
                />
              </div>
              <div className="plan-input-container">
                <p className="plan-input-label">State</p>
                <input
                  onChange={e => handleChange(e, "state")}
                  value={data.state}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Plan;
