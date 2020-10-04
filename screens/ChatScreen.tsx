import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('r3qdy2xxezkj','');
const name = 'Lahiru'
const user = {
  id: 'Lahiru',
  name: 'Dark sun',
  image:
    'https://getstream.io/random_png/?id=dark-sun-9&amp;name=Dark+sun',
};

// const token = chatClient.createToken('Lahiru');
// alert("Token "+token);

chatClient.updateAppSettings({
    disable_auth_checks: true
});

// const devtoken = chatClient.devToken('Lahiru');
// alert("DevToken "+devtoken);
// chatClient.setUser(user,devtoken,);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "fgfggf"); //fggfgfdgf
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