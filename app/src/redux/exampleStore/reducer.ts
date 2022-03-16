const produce = require("immer");
const { ExampleActionTypes } = require("./types");

const initialState = {
  checked: false,
};

const setChecked = (state: any, action: any) =>
  produce(state, (draft: any) => {
    const payload = action.payload;

    draft.checked = payload;
  });

export const ExampleReducer = (
  state = initialState,
  action = { type: "UNKNOWN" }
) => {
  switch (action.type) {
    case ExampleActionTypes.SET_CHECKED:
      return setChecked(state, action);

    default:
      return state;
  }
};
