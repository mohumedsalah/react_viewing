import { useDispatch } from "react-redux";

import SingleFilter from "./singleFilter/singleFilter";
import {
  setCamp,
  setCountry,
  setSchool,
} from "../../../redux/analysisStore/reducer";

import "./filters.css";

interface FilterLists {
  countryList: string[];
  schoolList: string[];
  campList: string[];
}

function Filters(props: FilterLists) {
  const { countryList, campList, schoolList } = props;
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <SingleFilter
        items={countryList}
        label={"Select Country"}
        onChange={(val: string) => {
          dispatch(setCountry(val));
        }}
      />

      <SingleFilter
        items={campList}
        label={"Select Camp"}
        onChange={(val: string) => {
          dispatch(setCamp(val));
        }}
      />

      <SingleFilter
        items={["All School", ...schoolList]}
        label={"Select School"}
        onChange={(val: string) => {
          dispatch(setSchool(val));
        }}
      />
    </div>
  );
}

export default Filters;
