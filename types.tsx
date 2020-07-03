export type RootStackParamList = {
  Tab: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  SearchCounselor: undefined;
  CounselorProfile: {userId:string};
  AvailableTime:{userId:string};
  AddAppointment:{userId:string,timeSlot:string}
};

