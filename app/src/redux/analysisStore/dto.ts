export interface State {
  country: string;
  camp: string;
  school: string;

  viewedData: any; // refer to multi school , multi refer
}

export interface SelectorState {
  analysis: State;
}
