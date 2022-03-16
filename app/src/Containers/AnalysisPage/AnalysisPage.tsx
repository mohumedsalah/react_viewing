import axios from "axios";
import { useEffect, useState } from "react";

import BarAnalysis from "./analysisBar/barAnalysis";
import "./AnalysisPage.css";
import CharsAnalysis from "./chars/charsAnalysis";
import Filters from "./filters/filters";

interface Item {
  camp: string;
  country: string;
  id: string;
  lessons: number;
  month: string;
  school: string;
}


function AnalysisPage() {
  const [countryList, setCountryList] = useState([""]);
 

  const [campList, setCampList] = useState([""]);
 

  const [schoolList, setSchoolList] = useState([""]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
      )
      .then((res) => {
        const list = res.data;
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
        <CharsAnalysis />

        <BarAnalysis />
      </div>
    </div>
  );
}

export default AnalysisPage;
