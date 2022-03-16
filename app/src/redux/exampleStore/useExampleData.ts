const { useSelector } = require("react-redux");

export const useExampleData = () => {
  const exampleState = useSelector(
    (state:any) => state.example
  );

  return exampleState;
};
