import React, { useState } from "react";
import "../scss/pages/_test.scss";

const Test: React.FC = (): JSX.Element => {
  const [leftValue, setLeftValue] = useState("0");
  const [rightValue, setRightValue] = useState("30");
  console.log(leftValue);
  console.log(rightValue);
  const [range, setRange] = useState({
    left: "0%",
    right: "0%",
  });
  const [thumb, setThumb] = useState({
    left: "0%",
    right: "0%",
  });

  const _setLeftValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    const [min, max] = [0, 30];

    setLeftValue(String(Math.min(value, parseInt(rightValue))));

    const percent = ((parseInt(leftValue) - min) / (max - min)) * 100;
    setThumb({ ...thumb, left: `${percent}%` });
    setRange({ ...range, left: `${percent}%` });
  };

  const _setRightValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    const [min, max] = [0, 30];

    setRightValue(String(Math.max(value, parseInt(leftValue))));

    const percent = ((parseInt(rightValue) - min) / (max - min)) * 100;
    setThumb({ ...thumb, right: `${100 - percent}%` });
    setRange({ ...range, right: `${100 - percent}%` });
  };
  return (
    <div className="grade-filter">
      <div className="filter-body">
        <div className="multi-range-slider">
          <input
            type="range"
            name="input-left"
            id="input-left"
            min="0"
            max="30"
            value={leftValue}
            onChange={(e) => _setLeftValue(e)}
          />
          <input
            type="range"
            name="input-right"
            id="input-right"
            min="0"
            max="30"
            value={rightValue}
            onChange={(e) => _setRightValue(e)}
          />
        </div>

        <div className="slider">
          <div className="track"></div>
          <div
            className="range"
            style={{ left: range.left, right: range.right }}
          ></div>
          <div className="thumb left" style={{ left: thumb.left }}></div>
          <div className="thumb right" style={{ right: thumb.right }}></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
