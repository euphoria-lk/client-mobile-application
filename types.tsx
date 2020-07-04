export type RootStackParamList = {
  Tab: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTow: undefined;
  TabThree: undefined;
};

export type TabOneParamList = {
  Profile: undefined;
}

export type TabTowParamList = {
  Forum: undefined;
};

export type TabThreeParamList = {
  SearchCounselor: undefined;
  CounselorProfile: {userId:string};
  AvailableTime:{userId:string};
  AddAppointment:{userId:string,timeSlot:string}
};

