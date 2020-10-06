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
  EditProfile: { userId: string };
}

export type TabTowParamList = {
  Forum: undefined;
};

export type TabThreeParamList = {
  SearchCounselor: undefined;
  CounselorProfile: { userName: string, };
  AvailableTime: { counsellorEmail?: string, userId?: string, date: string };
  AddAppointment: { userId?: string, timeSlot: string }
  ChatScreen: { userId?: string | null, channelId?: string | null, userName?: string | null, iamge?: string | null, counsellorName?: string | null };
  PickDate: { counsellorEmail?: string, userId: string };
};

export type TabFourParamList = {
  Appointments: undefined;
  AppointmentView: { appointmentId: string }
}

export type Counsellor = {
  _id: string,
  email: string,
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

export type Client = {
  _id: string,
  birthday: string,
  city: string,
  contact: string,
  ditrict: string,
  email: string,
  firstname: string,
  gender: string,
  lastname: string,
  nic: string,
  image: string,
}

