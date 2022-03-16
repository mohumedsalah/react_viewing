const { useDispatch } = require("react-redux");
const { setChecked } = require("./actions");

export const useExampleActions = () => {
  const dispatch = useDispatch();

  /**
   *
   * Function that set checked to true or false
   * @param {number} [checked] - The checked value
   * @return {*}  {void}
   */
  const doSetChecked = async (checked:boolean) => {
    dispatch(setChecked(checked));
  };

  // returns functions
  return {
    doSetChecked,
  };
};
