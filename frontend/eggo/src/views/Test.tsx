import React from "react";

const Test: React.FC = (): JSX.Element => {
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
            value="0"
          />
          <input
            type="range"
            name="input-right"
            id="input-right"
            min="0"
            max="30"
            value="30"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
