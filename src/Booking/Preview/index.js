import React, { useEffect } from "react";
import "./preview.css";

const Preview = ({ data }) => {
  useEffect(() => {
    console.log("here the data is ", data);
  }, [data]);

  return (
    <div className="preview-container">
      <div className="preview-top">Form preview</div>
      <div className="preview-bottom">
        <div className="preview-bottom-details">
          <p className="preview-title">Personal email address</p>
          <p className="preview-data">{data.email}</p>
        </div>
        <div className="preview-bottom-details">
          <p className="preview-title">Mobile number</p>
          <p className="preview-data">{data.mobile}</p>
        </div>
        <div className="preview-bottom-details">
          <p className="preview-title">Address line 01</p>
          <p className="preview-data">{data.address1}</p>
        </div>
        <div className="preview-bottom-details">
          <p className="preview-title">Address line 02</p>
          <p className="preview-data">{data.address2}</p>
        </div>
        <div className="preview-bottom-details">
          <p className="preview-title">Pincode</p>
          <p className="preview-data">{data.pincode}</p>
        </div>
        <div className="preview-bottom-details">
          <p className="preview-title">State</p>
          <p className="preview-data">{data.state}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
