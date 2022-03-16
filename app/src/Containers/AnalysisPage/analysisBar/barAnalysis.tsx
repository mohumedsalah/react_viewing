import "./barAnalysis.css";
import SingleUnitForSchool from "./singleUnitForSchool/singleUnitForSchool";



function BarAnalysis() {
  return (
    <div className="barAnalysis-container">
      <div className="main-barAnalysis">
        <div className="label-container">
          <label>
            <span>80</span> Lessons
          </label>
          <span> in cop </span>
        </div>
      </div>

      <div className="barAnalysis-container-school">
        <SingleUnitForSchool numberOfLessons={17} schoolName={"omar"} />

        <SingleUnitForSchool numberOfLessons={17} schoolName={"omar"} />

        <SingleUnitForSchool numberOfLessons={17} schoolName={"omar"} />

        <SingleUnitForSchool numberOfLessons={17} schoolName={"omar"} />

        <SingleUnitForSchool numberOfLessons={80} schoolName={"salah"} />

        <SingleUnitForSchool numberOfLessons={20} schoolName={"twitter"} />

        <SingleUnitForSchool numberOfLessons={14} schoolName={"mazz"} />

        <SingleUnitForSchool numberOfLessons={45} schoolName={"migoo"} />
      </div>
    </div>
  );
}

export default BarAnalysis;
