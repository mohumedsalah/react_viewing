export interface Item {
  camp: string;
  country: string;
  id: string;
  lessons: number;
  month: string;
  school: string;
}

export interface ISchool {
  numOfLesson: number;
  schoolName: string;
  color: string;
}

export interface DisplaySchoolPerMonth {
  counts: number[];
  schoolName: string;
  color:string;
  viewing: boolean;
}
export interface IBarAnalysisProps {
  totalNumberOfLesson: number;
  camp: string;
  displaySchools: ISchool[];
}

export interface ICharAnalysisProps {
  displaySchoolPerMonth: DisplaySchoolPerMonth[];
}
