import "./singleUnitForSchool.css";

import { useState } from "react";
import RadioButton from "../../../../components/RadioButton/radioButton";
import { useDispatch } from "react-redux";
import { changeViewAnalysis } from "../../../../redux/analysisStore/reducer";

interface PropsData {
  numberOfLessons: Number;
  schoolName: string;
  color: string;
}

function SingleUnitForSchool(props: PropsData) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const { numberOfLessons, schoolName, color } = props;

  return (
    <div className="single-unit-container">
      <label className="radio-container">
        <div className="label-container">
          <label>
            <span>{numberOfLessons}</span> Lessons
          </label>
          <span> in {schoolName} </span>
        </div>
        <RadioButton
          checked={checked}
          onChange={() => {
            const payload = {
              color: color,
              schoolName: schoolName,
              view: !checked,
            };
            dispatch(changeViewAnalysis(payload));
            setChecked(!checked);
          }}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default SingleUnitForSchool;
