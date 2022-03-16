import { IBarAnalysisProps, ISchool } from "../dto";

import "./barAnalysis.css";
import SingleUnitForSchool from "./singleUnitForSchool/singleUnitForSchool";

function BarAnalysis(props: IBarAnalysisProps) {
  const { totalNumberOfLesson, camp, displaySchools } = props;

  // setAnalysedSchools();

  return (
    <div className="barAnalysis-container">
      <div className="main-barAnalysis">
        <div className="label-container">
          <label>
            <span>{totalNumberOfLesson}</span> Lessons
          </label>
          <span> in {camp} </span>
        </div>
      </div>

      <div className="barAnalysis-container-school">
        {displaySchools.map((el: ISchool) => (
          <SingleUnitForSchool
          key={el.schoolName}
            numberOfLessons={el.numOfLesson}
            schoolName={el.schoolName}
          />
        ))}
      </div>
    </div>
  );
}

export default BarAnalysis;
