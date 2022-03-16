import "./filters.css";

interface FilterLists {
  countryList: string[];
  schoolList: string[];
  campList: string[];
}

function Filters(props: FilterLists) {
  const { countryList, campList, schoolList } = props;

  return (
    <div className="filter">
      <div>
        <label>Select Country</label>
        <select name="country" id="country">
          {countryList.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>Select Camp</label>
        <select name="cars" id="cars">
          {campList.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>Select School</label>
        <select name="cars" id="cars">
          {[
            <option key="all" value="all">
              "all schools"
            </option>,
            ...schoolList.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            }),
          ]}
        </select>
      </div>
    </div>
  );
}

export default Filters;
