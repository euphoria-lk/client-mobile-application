import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('r3qdy2xxezkj');
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTGFoaXJ1In0.1F452Q-xxP_KRAwj-_T6dq7asdq88Mm6TPTVEdi3Zok';

const user = {
  id: 'Lahiru',
  name: 'Dark sun',
  image:
    'https://getstream.io/random_png/?id=dark-sun-9&amp;name=Dark+sun',
};
chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "fggfgfdgf"); //fggfgfdgf
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
}

export default class ChatScreen extends React.Component {
  render() {
    return <ChannelScreen />;
  }
}