import React, { useState, useRef, useEffect } from "react";
import "./amount.css";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";

const Amount = ({ data, setActiveCta, setAmount }) => {
  const inputRef = useRef();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setActiveCta(checked);
  }, [checked]);

  useEffect(() => {
    setAmount((Math.floor(selectedAmount / 25) + 1) * 100000);
  }, [selectedAmount]);

  return (
    <div className="plan-contianer">
      <p className="plan-heading">Select your deductible amount</p>
      <p className="plan-description">
        Select the deductible amount for the policy (or policies) below. (what
        is a deductible?){" "}
      </p>
      <div className="amount-select-container">
        <p>{data.type}</p>
        <div className="flex" style={{ justifyContent: "flex-start" }}>
          <img src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg" />
          <span>John Smith</span>
        </div>
        <hr />
        <p>
          Sum insured of ₹20,00,000 with a deductible of{" "}
          <strong>₹{Math.floor(selectedAmount / 25) + 1},00,000</strong>
        </p>
        <div className="seekbar-container">
          <SeekBar
            ref={inputRef}
            getNumber={setSelectedAmount}
            width="100%"
            backgroundColor="#e6e600"
            fillColor="red"
            fillSecondaryColor="blue"
            headColor="red"
            headShadow="red"
            progress={selectedAmount}
          />
          <div className="flex">
            <p>₹1L</p>
            <p>₹2L</p>
            <p>₹3L</p>
            <p>₹4L</p>
            <p>₹5L</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          onChange={e => setChecked(e.target.checked)}
          className="checkbox"
        />
        <p>
          I understand that this insurance will not be utilized until ₹3,00,000
          (deductible) is exhausted.
        </p>
      </div>
    </div>
  );
};

export default Amount;
