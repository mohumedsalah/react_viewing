import axios from "axios";
import { useEffect, useState } from "react";

import BarAnalysis from "./analysisBar/barAnalysis";
import { ISchool, Item, DisplaySchoolPerMonth } from "./dto";

import "./AnalysisPage.css";
import CharsAnalysis from "./chars/charsAnalysis";
import Filters from "./filters/filters";
import { useSelector } from "react-redux";
import { SelectorState } from "../../redux/analysisStore/dto";
import { monthArray } from "../../constant";

function AnalysisPage() {
  const [countryList, setCountryList] = useState([""]);

  const [campList, setCampList] = useState([""]);

  const [schoolList, setSchoolList] = useState([""]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
      )
      .then((res) => {
        const list = res.data;
        setItems(res.data);
        const countrySet = new Set<string>();
        const campSet = new Set<string>();
        const schoolSet = new Set<string>();

        list.forEach((obj: Item) => {
          countrySet.add(obj.country);
          campSet.add(obj.camp);
          schoolSet.add(obj.school);
        });
        setSchoolList(Array.from(schoolSet));
        setCountryList(Array.from(countrySet));
        setCampList(Array.from(campSet));
      })
      .catch((err) => {
        console.log(err, "errrrrrrrro");
      });
  }, []);

  const selectedFilter = useSelector((state: SelectorState) => state);

  //****************start logic for getting data of bar ****************** */

  let totalNumberOfLesson = 0;

  const { camp, country, school } = selectedFilter.analysis;
  const _items =
    school === "All School"
      ? items.filter((el: Item) => el.camp === camp && el.country === country)
      : items.filter(
          (el: Item) =>
            el.camp === camp && el.country === country && el.school === school
        );

  const schoolSet = new Set<string>();
  _items.forEach((el: Item) => {
    schoolSet.add(el.school);
  });

  const displaySchools: ISchool[] = [];
  const displaySchoolPerMonth: DisplaySchoolPerMonth[] = [];
  schoolSet.forEach((el) => {
    let numOfLesson = 0;
    const schoolList = _items.filter((t: Item) => t.school === el);

    schoolList.forEach((c: Item) => (numOfLesson += c.lessons));

    totalNumberOfLesson += numOfLesson;
    const school: ISchool = { numOfLesson, schoolName: el };
    // bar analysis part
    displaySchools.push(school);

    // graph analysis part
    const dataAnalysisForSingleSchool: number[] = [];
    monthArray.forEach((m) => {
      let numLessonsPerMonth = 0;
      schoolList.forEach((sc: Item) => {
        if (sc.month === m) {
          numLessonsPerMonth += sc.lessons;
        }
      });
      dataAnalysisForSingleSchool.push(numLessonsPerMonth);
    });

    displaySchoolPerMonth.push({
      schoolName: el,
      counts: dataAnalysisForSingleSchool,
    });
  });

  //****************end logic for getting data of bar ****************** */

  return (
    <div className="analysisChar">
      <h3>Analysis Char</h3>

      <h4>Number of Lessons</h4>

      <Filters
        countryList={countryList}
        schoolList={schoolList}
        campList={campList}
      />

      <div className="analysis-container">
        <CharsAnalysis  displaySchoolPerMonth={displaySchoolPerMonth}  />

        <BarAnalysis
          totalNumberOfLesson={totalNumberOfLesson}
          displaySchools={displaySchools}
          camp={selectedFilter.analysis.camp}
        />
      </div>
    </div>
  );
}

export default AnalysisPage;
