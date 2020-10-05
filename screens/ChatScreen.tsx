import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabThreeParamList } from "../types";

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'ChatScreen'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  TabThreeParamList,
  'ChatScreen'
>;
interface Props {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}



// class ChannelScreen extends React.Component {

//   render() {
//     const channel = chatClient.channel("messaging", "fggfgfdgf"); //fggfgfdgf
//     channel.watch();

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel channel={channel}>
//             <View style={{ display: "flex", height: "100%" }}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// export default class ChatScreen extends React.Component {
//   render() {
//     return <ChannelScreen />;
//   }
// }


const ChatScreen = ({navigation, route}:Props) => {

  const [userToken,setUserToken] = React.useState();

  const getUserToken = ()=>{
    const url = 'http://35.193.105.188:5002/api/v1/counselling-service/chat/init'
    const requestOption:RequestInit = {
      method:'POST',
      headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
      body:`string=${route.params.userId}`
    }
    fetch(url,requestOption)
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      setUserToken(res);
    })
    .catch(err=>console.log(err))
  }
  React.useEffect(()=>{
    getUserToken();
  },[])
  const chatClient = new StreamChat('r3qdy2xxezkj');

  const user = {
    id: route.params.userId?route.params.userId:"",
    name: route.params.userName?route.params.userName:"",
    image:route.params.iamge?route.params.iamge:"",
  };
  chatClient.setUser(user, userToken);
  const channel = chatClient.channel("messaging", route.params.channelId?route.params.channelId:""); //fggfgfdgf
  channel.watch();

  return (
    <SafeAreaView>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <View style={{ display: "flex", height: "100%" }}>
            <MessageList />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
}

export default ChatScreen;