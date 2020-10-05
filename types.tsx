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
  CounselorProfile: {userName:string};
  AvailableTime:{counsellorEmail?:string};
  AddAppointment:{userId:string,timeSlot:string}
  ChatScreen: {userId?:string|null, channelId?:string|null,userName?:string|null,iamge?:string|null,counsellorName?:string|null};
};

export type TabFourParamList = {
  Appointments:undefined;
}

export type Counsellor = {
  _id:string,
  email:string,
  name: string,
  description: string,
  slmc: string,
  hospital: string,
  speciality: string,
  city: string,
  image: string,
  createdAt: string,
  updatedAt: string,
}

