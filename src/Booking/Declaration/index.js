import React, { useState, useEffect } from "react";
import "./declaration.css";
import BackIcon from "../assets/back.svg";

const Declaration = ({ setActiveCta, stepsDone, setStepsDone }) => {
  const [data, setData] = useState(declarationData);
  const [check, setCheck] = useState(false);

  const updateCheck = (e, index) => {
    let tempData = data;
    tempData[index].checked = e.target.checked;
    setData(tempData);
    setCheck(!check);
  };

  useEffect(() => {
    let allChecked = data.filter(item => item.checked);
    if (allChecked.length == 4) setActiveCta(true);
  }, [check]);

  return (
    <div className="plan-contianer">
      <div className="flex" style={{ justifyContent: "flex-start" }}>
        <img
          src={BackIcon}
          className="back-icon"
          onClick={() => setStepsDone(stepsDone - 1)}
        />
        <p className="plan-heading">Declaration</p>
      </div>
      <div className="declaration-container">
        {data?.map((item, index) => {
          return (
            <div className="flex">
              <input
                type="checkbox"
                className="checkbox"
                // checked={item.checked}
                onChange={e => updateCheck(e, index)}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Declaration;

const declarationData = [
  {
    title:
      "I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.",
    checked: false,
  },
  {
    title:
      "I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.",
    checked: false,
  },
  {
    title:
      "I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)",
    checked: false,
  },
  {
    title: "I understand that this policy doesn't cover Pre-existing diseases.",
    checked: false,
  },
];
