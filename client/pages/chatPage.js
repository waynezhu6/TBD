import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard
} from 'react-native';
import { Button } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { socket } from "../App";

import Message from '../components/message';

const ChatPage = ({navigation}) => {

  const scroll = useRef(null);
  const [input, setInput] = useState(""); //current input string
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      scroll.current.scrollToEnd({animated: false});
    });

    if(scroll.current){
      scroll.current.scrollToEnd({animated: true});
    }

    return (() => {
      keyboardDidShow.remove();
    })
  });

  const generateMessages = () => {
    let elements = [];
    let key = 0;
    for(const message of history){
      elements.push(
        <Message
          owner={message.owner}
          timestamp={message.timestamp}
          body={message.body}
          key={key}
        />
      );
      key += 1;
    }
    return elements;
  }

  const onLeave = () => {
    socket.emit('leaveRoom');
    navigation.navigate('home');
  }

  const sendMessage = () => {
    let message = {owner: 1, timestamp: "3:02AM", body: input}
    setHistory(history.concat([message]));
    setInput("");
    socket.emit("sendMessage", message);
  }

  socket.on("recieveMessage", (data) => {
    console.log(data.id, socket.id);
    console.log(data.id != socket.id);
    if(data.id != socket.id){
      let message = data.message;
      message.owner = 0;
      setHistory(history.concat([message]));
    }
  });

  return (
  <SafeAreaView style={styles.body}>

    <View style={styles.header}>

      {/* <View style={styles.back}></View> */}

      <View style={styles.profile}>
        <Ionicons name="ios-person-circle-outline" size={48} style={styles.profileIcon}/>
      </View>

      <View style={styles.info}>
        <Text style={styles.username}>Anonymous</Text>
        <Text style={styles.status}>Online</Text>
      </View>

      <View style={styles.leave}>
        <Button 
          style={styles.leaveButton}
          onPress={() => onLeave()}
        >
          Leave
        </Button>
      </View>
        
    </View>

    <View style={styles.content}>

      <Text style={styles.date}>Today, 11/21/2020</Text>

      <ScrollView style={styles.messages} ref={scroll}>
        {generateMessages()}
      </ScrollView>

      <View style={styles.textbar}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          onChangeText={text => setInput(text)}
          onSubmitEditing={() => {sendMessage()}}
          value={input}
        />
      </View>

    </View>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#9886C3"
  },

  header: {
    flexDirection: "row",
    height: 80
  },
  
  back: {
    flex: 1, 
  },

  profile: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  profileIcon: {
    flex: 1,
    color: 'white',
    textAlign: 'center'
  },

  info: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  status: {
    color: "white",
    fontSize: 13,
  },

  leave: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leaveButton: {
    width: '60%',
    borderRadius: 100
  },

  content: {
    flex: 6,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },

  date: {
    width: "100%",
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#B2B2B2"
  },

  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 16,
    marginTop: 0,
    fontSize: 16,
    backgroundColor: "#F2F1F6",
    borderRadius: 24
  }

});

export default ChatPage;

const MOCK_MESSAGES = [
  {
    owner: 1,
    timestamp: "1:40PM",
    body: 'A world without communication is meaningless. So you have to message everyone you ' +
    'know! Yes yes yes yes yes. test test test good man good man ice cream'
  },
  {
    owner: 0,
    timestamp: "1:42PM",
    body: 'Some people are saying this man is the new Nicholas Batum'
  },
  {
    owner: 1,
    timestamp: "1:46PM",
    body: 'I think Mr Elshentnway would give him a massive beating'
  },
  {
    owner: 1,
    timestamp: "1:40PM",
    body: 'A world without communication is meaningless. So you have to message everyone you ' +
    'know! Yes yes yes yes yes. test test test good man good man ice cream'
  },
  {
    owner: 0,
    timestamp: "1:42PM",
    body: 'Some people are saying this man is the new Nicholas Batum'
  },
  {
    owner: 1,
    timestamp: "1:46PM",
    body: 'I think Mr Elshentnway would give him a massive beating'
  }
]