const { ExampleActionTypes } = require("./types");

export const setChecked = (checked: boolean) => ({
  type: ExampleActionTypes.SET_CHECKED,
  payload: checked,
});
