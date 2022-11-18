import React, { useEffect } from "react";
import "./review.css";

const Review = ({ setActiveCta, data }) => {
  useEffect(() => {
    setActiveCta(true);
  }, []);

  return (
    <div className="plan-contianer">
      <p className="plan-heading">Review and confirm payment</p>
      <div className="review-container">
        <div className="flex review-section">
          <p className="review-title">Plan selected</p>
          <p className="review-des">{data.type}</p>
        </div>
        <div className="flex review-section">
          <p className="review-title">Mobile number</p>
          <p className="review-des">{data.mobile}</p>
        </div>
        <div className="flex review-section">
          <p className="review-title">Address line 01</p>
          <p className="review-des">{data.address1}</p>
        </div>
        <div className="flex review-section">
          <p className="review-title">Pincode</p>
          <p className="review-des">{data.pincode}</p>
        </div>
        <div className="flex review-section">
          <p className="review-title">State</p>
          <p className="review-des">{data.state}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
