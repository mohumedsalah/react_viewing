export interface State {
  country: string;
  camp: string;
  school: string;

  viewedData: number[][]; // refer to multi school , multi refer
}

export interface SelectorState {
  analysis: State;
}
