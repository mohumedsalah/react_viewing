import "./singleUnitForSchool.css";

import { useState } from "react";
import RadioButton from "../../../../components/RadioButton/radioButton";

interface PropsData {
  numberOfLessons: Number;
  schoolName: string;
}

function SingleUnitForSchool(props: PropsData) {
  const [checked, setChecked] = useState(false);

  const { numberOfLessons, schoolName } = props;

  return (
    <div className="single-unit-container">
      <label className="radio-container">
        <div className="label-container">
          <label>
            <span>{numberOfLessons}</span> Lessons
          </label>
          <span> in {schoolName} </span>
        </div>
        <RadioButton checked={checked} onChange={() => setChecked(!checked)} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default SingleUnitForSchool;
