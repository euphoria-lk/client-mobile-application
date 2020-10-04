export type RootStackParamList = {
  Tab: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTow: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type TabOneParamList = {
  Profile: undefined;
  EditProfile:{userId:string};
}

export type TabTowParamList = {
  Forum: undefined;
};

export type TabThreeParamList = {
  SearchCounselor: undefined;
  CounselorProfile: {userId:string};
  AvailableTime:{userId:string};
  AddAppointment:{userId:string,timeSlot:string}
  ChatScreen: {userId:string,userName:string};
};

export type TabFourParamList = {
  Appointments:undefined;
}

