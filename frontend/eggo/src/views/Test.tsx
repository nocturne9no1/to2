import React, { useState } from "react";
import "../scss/pages/_test.scss";

const Test: React.FC = (): JSX.Element => {
  const [leftValue, setLeftValue] = useState("0");
  const [rightValue, setRightValue] = useState("30");
  const [range, setRange] = useState({
    left: "25%",
    right: "25%",
  });
  const [thumb, setThumb] = useState({
    left: "0%",
    right: "0%",
  });

  // input range - unvisable
  // const inputLeft = document.getElementById("input-left");
  // const inputRight = document.getElementById("input-right");

  // visable div
  // const thumbLeft = document.querySelector(".sdlier > .thumb.left");
  // const thumbRight = document.querySelector(".sdlier > .thumb.right");
  // const range = document.querySelector(".slider > .range");

  const _setLeftValue = (e: React.FormEvent<HTMLInputElement>) => {
    // setLeftValue(e.currentTarget.value);
    const value = parseInt(e.currentTarget.value);
    const [min, max] = [0, 30];

    setLeftValue(String(Math.min(value, parseInt(rightValue) - 1)));

    const percent = ((value - min) / (max - min)) * 100;
    setThumb({ ...thumb, left: `${percent}%` });
    setRange({ ...range, left: `${percent}%` });
  };

  const _setRightValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value);
    const [min, max] = [0, 30];

    setRightValue(String(Math.max(value, parseInt(leftValue) + 1)));

    const percent = ((value - min) / (max - min)) * 100;
    setThumb({ ...thumb, right: `${percent}%` });
    setRange({ ...range, right: `${percent}%` });
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
